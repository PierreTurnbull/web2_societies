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
  uniform float holdValue;
  uniform float userScrollSpeed;
  uniform float time;

  void main() {
    vUv = uv;
    vec2 _uv = uv - 0.5;
    vUv = _uv;
    vUv *= uvRate1.xy;

    vUv += 0.5;
    vec3 newPosition = position;
    newPosition.z = sin(position.y * sin(time) + holdValue/50.) * sin(position.x * cos(time) + holdValue/50.) * 0.1;

    gl_Position =  projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  varying vec2 vUv1;
  uniform float time;
  uniform float holdValue;
  uniform float random;
  uniform sampler2D texture;
  uniform float userScrollSpeed;
  uniform sampler2D map;

  void main() {
    float map = texture2D(map, vUv + holdValue/200.).r * 10. / cos(time);
    float distort = sin( cos(time)) * .001 + sin( cos(time) * (holdValue/200.)) * 0.03;
    vec4 color = texture2D(texture, vec2(vUv.x + distort + (distort * map), vUv.y + distort + (distort * map) ));
    gl_FragColor = vec4(vec3(color.r, color.g , color.b) * 1.0, 1.0);
  }
  `
  
  export { vertexShader, fragmentShader, setRandomShader }
  
  // float distort = ${randomFunction}(vUv.y * abs(${randomFunction}(time/5.) * userScrollSpeed + vUv.x * 5.) / abs(${randomFunction}(random/100.)) + time/2.)*0.1 * map;
// varying vec2 vUv;
// uniform float time;
// uniform sampler2D texture;
// float distort = sin(vUv.y + time)*0.001;