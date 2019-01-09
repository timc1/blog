import { useRef, useEffect } from 'react'
import * as PIXI from 'pixi.js'
import { TweenMax } from 'gsap/TweenMax'

import { isMobile } from '../../../utils'

export default ({ pixiRef, displacementImage, image }) => {
  const eventListener = useRef()

  useEffect(() => {
    // PIXI Variables
    const renderer = new PIXI.autoDetectRenderer(1620, 1620, {
      transparent: true,
    })
    const stage = new PIXI.Container()
    const slidesContainer = new PIXI.Container()
    const displacementSprite = new PIXI.Sprite.fromImage(displacementImage)
    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    )

    const initPixi = () => {
      // Add canvas to the HTML
      pixiRef.current.appendChild(renderer.view)

      // Add child container to the main container
      stage.addChild(slidesContainer)

      // Fit renderer to the screen
      renderer.view.style.objectFit = 'cover'
      renderer.view.style.width = '100%'
      renderer.view.style.height = '100%'
      renderer.view.style.webkitTransform = 'scale(1.2)'
      renderer.view.style.transform = 'scale(1.2)'

      displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

      // Set the filter to stage and set some default values for the animation
      stage.filters = [displacementFilter]

      displacementSprite.scale.x = 2
      displacementSprite.scale.y = 2

      // PIXI tries to fit the filter bounding box to the renderer so we optionally bypass
      displacementFilter.autoFit = false

      stage.addChild(displacementSprite)
    }

    const loadPixiSprite = () => {
      const texture = new PIXI.Texture.fromImage(image)
      const img = new PIXI.Sprite(texture)

      slidesContainer.addChild(img)

      if (!isMobile()) {
        eventListener.current = ({ clientX, clientY }) => {
          const third = window.innerHeight / 3
          const low = third
          const high = third * 2

          console.log('low', low, clientY)
          console.log('high', high)

          if (clientY > low && clientY < high) {
            TweenMax.to(displacementFilter.scale, 1, {
              x: 20,
              y: 20,
            })
          } else {
            TweenMax.to(displacementFilter.scale, 1, {
              x: '+=' + Math.sin(1000) * 200 + '',
              y: '0',
            })
          }
        }
        window.addEventListener('mouseover', eventListener.current)
      }
    }

    // Init
    initPixi()
    loadPixiSprite()
    // Render to screen
    var ticker = new PIXI.ticker.Ticker()

    ticker.autoStart = true

    ticker.add(function(delta) {
      displacementSprite.x += 4 * delta
      displacementSprite.y += 3

      renderer.render(stage)
    })

    return () => {
      document.removeEventListener('mouseover', eventListener.current)
      pixiRef.current.innerHTML = ''
    }
  }, [])
}
