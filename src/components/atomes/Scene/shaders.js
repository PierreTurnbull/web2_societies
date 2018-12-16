const random = Math.random();
const vertexShader = `
  varying vec2 vUv;
  varying vec2 vUv1;
  uniform vec2 size;
  uniform vec2 resolution;
  uniform vec2 uvRate1;

  void main() {
    vUv = uv;
    vec2 _uv = uv - 0.5;
    vUv1 = _uv;
    vUv1 *= uvRate1.xy;

    vUv1 += 0.5;

    gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  varying vec2 vUv1;
  uniform float time;
  uniform sampler2D texture;

  void main() {
    float distort = cos(vUv.y * abs(sin(time/${random}/10.)*3. + vUv.x * 2.) / abs(sin(.5)) + time/2.)*.1;
    vec4 color = texture2D(texture, vec2(vUv.x + distort * .5,vUv.y + distort * .2));
    gl_FragColor = vec4(vec3(color.r, color.g , color.b) * 1.0, 1.0);
  }
`

export { vertexShader, fragmentShader }

// varying vec2 vUv;
// uniform float time;
// uniform sampler2D texture;
// float distort = sin(vUv.y + time)*0.001;