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
  uniform float random;
  uniform sampler2D texture;
  uniform float userScrollSpeed;
  uniform sampler2D map;


  void main() {
    float map = texture2D(map, vUv).r;
    float distort = ${randomFunction}(vUv.y * abs(${randomFunction}(time/10.*random/100.) * userScrollSpeed + vUv.x * 2.) / abs(${randomFunction}(random/100.)) + time/2.)*0.1*random/100.;
    vec4 color = texture2D(texture, vec2(vUv.x + distort * map * .5,vUv.y + distort * map * random/100.));
    gl_FragColor = vec4(vec3(color.r, color.g , color.b) * 1.0, 1.0);
  }
`

export { vertexShader, fragmentShader, setRandomShader }

// varying vec2 vUv;
// uniform float time;
// uniform sampler2D texture;
// float distort = sin(vUv.y + time)*0.001;