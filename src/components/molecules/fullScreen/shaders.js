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
  uniform float progress;
  uniform float userScrollSpeed;
  uniform float time;

  void main() {
    vUv = uv;
    vec2 _uv = uv - 0.5;
    vUv = _uv;

    vUv += 0.5;
    vec3 newPosition = position;
    newPosition.z = sin(progress/50.) * sin(progress/50.) * progress/700.;

    gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
// newPosition.z = sin(position.y * sin(time) + holdValue/50.) * sin(position.x * cos(time) + holdValue/50.) * 0.1;

const fragmentShader = `
  varying vec2 vUv;
  varying vec2 vUv1;
  uniform float time;
  uniform float progress;
  uniform float scrollProgress;
  uniform float opacityProgress;
  uniform float random;
  uniform sampler2D texture;
  uniform sampler2D texture2;
  uniform float userScrollSpeed;
  uniform sampler2D map;
  uniform sampler2D transitionMap;

  void main() {
    float map = texture2D(map, vec2(vUv.x + progress/1000., vUv.y + progress/1000.)).r * 3.;
    float transitionMap = texture2D(transitionMap, vec2(vUv.x + sin(time) * progress/1000., vUv.y + progress/1000.)).r * 3.;
    float distort = sin( cos(time)) * .001 + sin( cos(time) * (progress/1000.)) * 0.01;
    float distort2 = sin(progress/100.) * cos(progress/100.) * progress * 3.;
    float scrollDistort = sin(scrollProgress/1000.) * cos(scrollProgress/1000.);

    vec4 rgba1 = texture2D(texture, vec2(vUv.x + (distort * map), vUv.y + (distort * map) * sin(distort*map*2.) ));
    vec4 rgba2 = texture2D(texture2, vUv);
  
    vec4 color = texture2D(texture, vec2(vUv.x + (distort*map) + (scrollDistort/2. * transitionMap) + (distort * transitionMap*2.) * distort2, vUv.y + distort* map + (distort* transitionMap)));
    vec4 rgba = mix(rgba1, rgba2, progress/200.);

    gl_FragColor = vec4(vec3(color)  - (vec3(color) * (progress/100.)), 1.0);
  }
  `
// vec4 color = texture2D(texture, vec2(vUv.x + distort*map*2. + (distort * map), vUv.y + distort*map*2. + (distort * map) ));

export { vertexShader, fragmentShader, setRandomShader }