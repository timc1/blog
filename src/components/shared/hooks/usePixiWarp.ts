import { useRef, useEffect } from 'react'
// @ts-ignore
import * as PIXI from 'pixi.js'
// @ts-ignore
import { TweenMax } from 'gsap/TweenMax'

const usePixiWarp = ({
  pixiRef,
  baseDisplacement,
  image,
}: {
  pixiRef: React.RefObject<any>
  baseDisplacement: string
  image: string
}) => {
  const eventListener = useRef(null)

  useEffect(() => {
    // PIXI Variables
    PIXI.utils.skipHello()
    const renderer = new PIXI.autoDetectRenderer(1620, 1620, {
      transparent: true,
    })
    const stage = new PIXI.Container()
    const slidesContainer = new PIXI.Container()
    const baseSprite = new PIXI.Sprite.fromImage(baseDisplacement)
    const baseFilter = new PIXI.filters.DisplacementFilter(baseSprite)

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

      baseSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

      // Set the filter to stage and set some default values for the animation
      stage.filters = [baseFilter]

      baseSprite.scale.x = 1
      baseSprite.scale.y = 1

      // PIXI tries to fit the filter bounding box to the renderer so we optionally bypass
      baseFilter.autoFit = false

      // Initial distortion
      baseFilter.scale.x = 846

      stage.addChild(baseSprite)
    }

    const loadPixiSprite = () => {
      const texture = new PIXI.Texture.fromImage(image)
      const img = new PIXI.Sprite(texture)

      slidesContainer.addChild(img)

      TweenMax.to(baseFilter.scale, 1, {
        x: 0,
        y: 0,
      })
    }

    // Init
    initPixi()
    loadPixiSprite()
    // Render to screen
    const ticker = new PIXI.ticker.Ticker()

    ticker.autoStart = true

    ticker.add(() => {
      renderer.render(stage)
    })

    return () => {
      renderer.view.removeEventListener('mouseover', eventListener.current)
      renderer.view.removeEventListener('mouseout', eventListener.current)
      pixiRef.current.innerHTML = ''
      ticker.destroy()
    }
  }, [])
}

export default usePixiWarp
