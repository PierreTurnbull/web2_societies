let randomFunction = null;
const setRandomShader = (_params) => {
  // console.log('_params', _params);
  randomFunction = _params >= 50 ? "sin" : "cos"
  console.log("randomFunction", randomFunction);
}

setRandomShader();
const vertexShader = `
  varying vec2 vUv;
  varying vec2 vUv1;
  uniform vec2 size;
  uniform vec2 resolution;
  uniform vec2 uvRate1;

  void main() {
    vUv = uv;
    vec2 _uv = uv - 0.5;
    vUv = _uv;
    vUv *= uvRate1.xy;

    vUv += 0.5;

    gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  varying vec2 vUv1;
  uniform float time;
  uniform float random;
  uniform sampler2D texture;
  uniform float userScrollSpeed;
  uniform sampler2D map;

  void main() {
    float map = texture2D(map, vUv).r;
    float distort = sin( sin(time)) / (vUv.x + vUv.y - 200.) * (map) + (sin( sin(time)) * vUv.x/500.) / 2.;
    vec4 color = texture2D(texture, vec2(vUv.x + distort, vUv.y + distort));
    gl_FragColor = vec4(vec3(color.r, color.g , color.b) * 1.0, 1.0);
  }
  `
  
  export { vertexShader, fragmentShader, setRandomShader }
  
  // float distort = ${randomFunction}(vUv.y * abs(${randomFunction}(time/5.) * userScrollSpeed + vUv.x * 5.) / abs(${randomFunction}(random/100.)) + time/2.)*0.1 * map;
// varying vec2 vUv;
// uniform float time;
// uniform sampler2D texture;
// float distort = sin(vUv.y + time)*0.001;