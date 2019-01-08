import React, { useRef, useLayoutEffect, useEffect } from 'react'
import styled from '@emotion/styled'
import { screenmd } from '../shared/styles'
import timchang from '../../images/tim_chang.jpg'

import { Curtains } from 'curtainsjs'

export default () => {
  const planeRef = useRef()
  const resizeListener = useRef()

  useLayoutEffect(() => {
    const vertexShader = document.createElement('script')
    const fragmentShader = document.createElement('script')

    vertexShader.setAttribute('type', 'x-shader/x-vertex')
    vertexShader.setAttribute('id', 'vertex-shader')
    fragmentShader.setAttribute('type', 'x-shader/x-fragment')
    fragmentShader.setAttribute('id', 'fragment-shader')

    vertexShader.appendChild(
      document.createTextNode(`
          
			#ifdef GL_ES
			precision mediump float;
			#endif

			// those are the mandatory attributes that the lib sets
			attribute vec3 aVertexPosition;
			attribute vec2 aTextureCoord;

			// those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
			uniform mat4 uMVMatrix;
			uniform mat4 uPMatrix;

			// if you want to pass your vertex and texture coords to the fragment shader
			varying vec3 vVertexPosition;
			varying vec2 vTextureCoord;

			void main() {
				vec3 vertexPosition = aVertexPosition;

				gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

				// set the varyings
				vTextureCoord = aTextureCoord;
				vVertexPosition = vertexPosition;
			}
         
        `)
    )

    fragmentShader.appendChild(
      document.createTextNode(`
			#ifdef GL_ES
			precision mediump float;
			#endif

			// get our varyings
			varying vec3 vVertexPosition;
			varying vec2 vTextureCoord;

			// the uniform we declared inside our javascript
			uniform float uTime;

			// our texture sampler (default name, to use a different name please refer to the documentation)
			uniform sampler2D uSampler0;

			void main() {
				vec2 textureCoord = vec2(vTextureCoord.x, vTextureCoord.y);

				// displace our pixels along the X axis based on our time uniform
				// textures coords are ranging from 0.0 to 1.0 on both axis
				textureCoord.x += sin(textureCoord.y * 25.0) * cos(textureCoord.x * 25.0) * (cos(uTime / 50.0)) / 25.0;

				gl_FragColor = texture2D(uSampler0, textureCoord);
			}
                `)
    )

    document.body.appendChild(vertexShader)
    document.body.appendChild(fragmentShader)

    return () => {
      try {
        const planeVsScript = document.getElementById('vertex-shader')
        const planeFsScript = document.getElementById('fragment-shader')
        document.body.removeChild(planeVsScript)
        document.body.removeChild(planeFsScript)
      } catch (err) {}
    }
  }, [])

  useEffect(() => {
    const webGLCurtain = new Curtains('canvas')
    const planeElement = planeRef.current

    // set our initial parameters (basic uniforms)
    var params = {
      vertexShaderID: 'vertex-shader', // our vertex shader ID
      fragmentShaderID: 'fragment-shader', // our framgent shader ID
      uniforms: {
        time: {
          name: 'uTime', // uniform name that will be passed to our shaders
          type: '1f', // this means our uniform is a float
          value: 0,
        },
      },
    }

    // create our plane mesh
    var plane = webGLCurtain.addPlane(planeElement, params)

    plane.onReady(function() {
      resizeListener.current = e => {
        plane.size.width = window.innerWidth * 0.6
        plane.size.height = window.innerHeight
        console.log(plane)
      }

      window.addEventListener('resize', resizeListener.current)
    })

    // use the onRender method of our plane fired at each requestAnimationFrame call
    plane.onRender(function() {
      plane.uniforms.time.value++ // update our time uniform value
    })

    return () => {
      window.removeEventListener('resize', resizeListener.current)
    }
  }, [])

  return (
    <ImageContainer aria-hidden="true">
      <CanvasContainer id="canvas" />
      <div ref={planeRef} className="plane">
        <img src={timchang} alt="Tim in Paris" css={{ display: 'none' }} />
      </div>
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% - var(--skewedcontent) - 2%);

  @media (max-width: ${screenmd}px) {
    position: absolute;
    height: 300px;
    width: 100%;
  }
`

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
