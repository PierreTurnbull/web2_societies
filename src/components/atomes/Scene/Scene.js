import React, { Component } from 'react'
import * as THREE from 'three';
import { vertexShader, fragmentShader, setRandomShader } from './shaders';
import { throttle, debounce } from 'lodash';
import scrollSpeed from 'utils/scrollSpeed';
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap/TweenMax";


// import img from './lol.jpeg';
// import imgz from './mdr.jpeg';

THREE.ImageUtils.crossOrigin = '';
// const images = [img, imgz];
let camera, scene, geometry;
let loader = new THREE.TextureLoader();
// let userScrollSpeed = 1.;
export default class Scene extends Component {

    constructor(props) {
        super(props);
        this.init = this.init.bind(this);
        this.animate = this.animate.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
        this.img = this.props.img;
        this.nb = 1;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.userScrollSpeed = 0.;
        this.renderer = null;
        this.scene = null;
        this.mesh = null;
        this.random = Math.floor(Math.random() * 100.) + 1.;
        this.MyTexture = loader.load(this.img,
            (texture) => {
                // this.w = texture.image.width
                // this.h = texture.image.height
                this.uniforms.size = {
                    type: "v2", value: new THREE.Vector2(this.w, this.h)
                }
            });
        // setTimeout(() => {
        //     this.nb = 1;
        //     this.MyTexture = loader.load(this.img);
        //     this.uniforms.texture = { type: "sampler2D", value: this.MyTexture };
        // }, 1000)
        // setTimeout(() => {
        //     this.nb = 0;
        //     this.MyTexture = loader.load(this.img);
        //     this.uniforms.texture = { type: "sampler2D", value: this.MyTexture };
        // }, 2000)
        console.log(this.w, this.h);

        this.uniforms = {
            time: { type: "f", value: 1.0 },
            random: { type: "f", value: this.random },
            resolution: { type: "v2", value: new THREE.Vector2() },
            uvRate1: { type: "f", value: new THREE.Vector2(1, 1) },
            userScrollSpeed: { type: "f", value: this.userScrollSpeed }
        };

        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            // wireframe: true
        });
    }
    // componentWillReceiveProps(nextProps) {
    //     // this.uniforms.time.value = nextProps.time
    //     console.log('mdt', this.state, this.props, nextProps);

    //     if (nextProps.width !== this.props.width)
    //         this.uniforms.resolution.value.x = nextProps.width;

    //     if (nextProps.height !== this.props.height)
    //         this.uniforms.resolution.value.y = nextProps.height;
    // }

    componentDidMount() {
        this.init();
        this.animate();
        // console.log(this.props.this.scene.current != null ? this.props.this.scene.current.getBoundingClientRect().x : 'nullll');
        // console.log(this.canvas.clientHeight);
        setRandomShader(this.uniforms.random.value);
        console.log(this.props.name);
        console.log("this.img", this.img);
        setTimeout(() => {
            console.group("SIZE");
            console.log("1", this.props.scene.current.getBoundingClientRect().x)
            console.groupEnd();
        }, 2000)
    }
    componentWillUnmount() {
        this.renderer.dispose()
    }

    init() {
        camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.01, 1000);
        camera.position.z = 1;

        this.scene = new THREE.Scene();
        // this.scene = this.scene.clone();
        // geometry = new THREE.PlaneGeometry(1, 1, 1);
        geometry = new THREE.PlaneGeometry(1, 1, 1);

        geometry.verticesNeedUpdate = true;
        this.MyTexture = loader.load(this.img,
            (texture) => {
                // this.w = texture.image.width
                // this.h = texture.image.height
                // this.uniforms.size = {
                //     type: "v2", value: new THREE.Vector2(texture.image.width, texture.image.height)
                // }
            });
        this.MyMap = loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFfVJb6RQW58GJ-JAf4E5WHhdYsiONQgLZrbCPk0fBCRl0gN_',
            (texture) => {
                // this.w = texture.image.width
                // this.h = texture.image.height
                // this.uniforms.size = {
                //     type: "v2", value: new THREE.Vector2(texture.image.width, texture.image.height)
                // }
            });

        this.uniforms.texture = { type: "sampler2D", value: this.MyTexture };
        this.uniforms.map = { type: "sampler2D", value: this.MyMap };

        let setSpeed = throttle((speed) => {
            console.log('SET');
            // this.uniforms.userScrollSpeed.value = skew;
            console.log(this.uniforms.userScrollSpeed.value);
            
            TweenLite.to(this.uniforms.userScrollSpeed, 1, { value: speed * 5 })
        }, 100);

        let setBack = debounce(() => {
            console.log('SET BACK');

            TweenLite.to(this.uniforms.userScrollSpeed, 1, { value: 0 })
        }, 100);

        window.onscroll = () => {
            const speed = scrollSpeed();
            // this.userScrollSpeed = speed;

            setSpeed(speed / 200);
            setBack();
        };

        // this.uniforms.size = {
        //     type: "v2", value: new THREE.Vector2(10, 10)
        // }

        this.mesh = new THREE.Mesh(geometry, this.material);
        this.scene.add(this.mesh);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setClearColor('#ff0000');
        this.canvas.appendChild(this.renderer.domElement);

        // setTimeout(() => {
        //     // this.props.this.scene.current.appendChild(renderer.domElement);
        // }, 2000);
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize, false);
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.uniforms.time.value += 0.03;
        // console.log(this.uniforms.userScrollSpeed.value);
        this.renderer.render(this.scene, camera);
    }

    onWindowResize(event) {
        // this.material = new THREE.ShaderMaterial({
        //     uniforms: this.uniforms,
        //     vertexShader: vertexShader,
        //     fragmentShader: fragmentShader
        // });
        // console.log(this.canvas);
        let w = this.canvas.clientWidth;
        let h = this.canvas.clientHeight;
        this.renderer.setSize(w, h);
        camera.aspect = w / h;

        let dist = camera.position.z - this.mesh.position.z;
        let height = 1;
        camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

        this.material.uniforms.uvRate1.value.y = h / w;

        if (w / h > 1) {
            console.log('>>>>>>>>>>>>>>>>>>>>');
            this.mesh.scale.y = w / h;
        }

        this.mesh.scale.x = w / h;
        camera.updateProjectionMatrix();
        this.uniforms.resolution.value.x = this.renderer.domElement.width;
        this.uniforms.resolution.value.y = this.renderer.domElement.height;

        this.uniforms.size = {
            type: "v2", value: new THREE.Vector2(this.renderer.domElement.width, this.renderer.domElement.height)
        }
    }
    render() {
        return (
            <div className={this.props.className} ref={(ref) => this.canvas = ref}>
            </div>
        )
    }
}
