<script lang="ts">
	import { T, useTask, useThrelte } from '@threlte/core';
	import { BufferAttribute, BufferGeometry, CanvasTexture, Fog } from 'three';

	let { speed = 15 }: { speed?: number } = $props();

	const COUNT = 2500;
	const SPREAD = 600;
	const DEPTH = 1000;

	const positions = new Float32Array(COUNT * 3);
	const randomSpread = () => (Math.random() - 0.5) * 2 * SPREAD;
	for (let i = 0; i < COUNT; i++) {
		positions[i * 3] = randomSpread();
		positions[i * 3 + 1] = randomSpread();
		positions[i * 3 + 2] = -Math.random() * DEPTH;
	}

	const geometry = new BufferGeometry();
	geometry.setAttribute('position', new BufferAttribute(positions, 3));

	// PointsMaterial draws squares by default; a radial gradient makes them round, soft dots
	function createStarTexture() {
		const canvas = document.createElement('canvas');
		canvas.width = canvas.height = 32;
		const ctx = canvas.getContext('2d')!;
		const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
		gradient.addColorStop(0, 'rgba(255,255,255,1)');
		gradient.addColorStop(0.4, 'rgba(255,255,255,0.8)');
		gradient.addColorStop(1, 'rgba(255,255,255,0)');
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, 32, 32);
		return new CanvasTexture(canvas);
	}
	const texture = createStarTexture();

	// distant stars fade in from black instead of popping into view
	const { scene } = useThrelte();
	scene.fog = new Fog('black', DEPTH * 0.4, DEPTH);

	useTask((delta) => {
		for (let i = 0; i < COUNT; i++) {
			const z = i * 3 + 2;
			positions[z] += speed * delta;
			// once a star passes the camera, send it back to the far end
			if (positions[z] > 0) {
				positions[i * 3] = randomSpread();
				positions[i * 3 + 1] = randomSpread();
				positions[z] -= DEPTH;
			}
		}
		geometry.attributes.position.needsUpdate = true;
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 0]} fov={75} near={0.1} far={DEPTH} />

<T.Points {geometry}>
	<T.PointsMaterial
		size={2}
		map={texture}
		color="white"
		transparent
		depthWrite={false}
		sizeAttenuation
	/>
</T.Points>
