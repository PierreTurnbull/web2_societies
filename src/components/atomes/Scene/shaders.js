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

    vUv += 0.5;
    vec3 newPosition = position;
    newPosition.z = sin(position.y * sin(time) + holdValue/50.) * sin(position.x * cos(time) + holdValue/50.) * 0.1;

    gl_Position =  projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`
// newPosition.z = sin(position.y * sin(time) + holdValue/50.) * sin(position.x * cos(time) + holdValue/50.) * 0.1;

const fragmentShader = `
  varying vec2 vUv;
  varying vec2 vUv1;
  uniform float time;
  uniform float holdValue;
  uniform float random;
  uniform sampler2D texture;
  uniform sampler2D texture2;
  uniform float userScrollSpeed;
  uniform sampler2D map;

  void main() {
    float map = texture2D(map, vec2(vUv.x + holdValue/3000., vUv.y+ holdValue/3000.)).r * 10.;
    float distort = sin( cos(time)) * .001 + sin( cos(time) * (holdValue/1000.)) * 0.01;

    vec4 rgba1 = texture2D(texture, vec2(vUv.x + sin(distort*map*10.*holdValue/50.), vUv.y - sin(distort*map*10.*holdValue/50.)));
    vec4 rgba2 = texture2D(texture2, vUv);
  
    vec4 color = texture2D(texture, vec2(vUv.x + sin(distort*map*10.*holdValue/50.), vUv.y - sin(distort*map*10.*holdValue/50.)));
    vec4 rgba = mix(rgba1, 0. + rgba2 * tan(holdValue/100.),holdValue/100.);

    gl_FragColor = vec4(vec3(color), 1.0);
  }
  `
  // vec4 color = texture2D(texture, vec2(vUv.x + distort*map*2. + (distort * map), vUv.y + distort*map*2. + (distort * map) ));
  
  export { vertexShader, fragmentShader, setRandomShader }