import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../assets/images/profiles.png'
import './Logo.scss'
import Loader from 'react-loaders'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    return () => {
      gsap.registerPlugin(DrawSVGPlugin)

      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outlineLogoRef.current, {
          drawSVG: 0,
          duration: 20,
        })

      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      )
    }
  }, [])

  return (
    <>
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        
      >
       

        <g
          transform="translate(0.000000,525.000000) scale(0.100000,-0.100000)"
          className="svg-container"
          fill="#000000"
          stroke="none"
        >
          <path
          ref={outlineLogoRef}
            d="M1755 4079 c-22 -4 -58 -6 -80 -3 -62 8 -115 -32 -159 -119 -20 -38
-36 -81 -36 -95 0 -14 -14 -77 -31 -141 -33 -124 -34 -164 -13 -467 6 -90 6
-91 -17 -97 -13 -4 -43 -7 -66 -7 -42 0 -42 0 -131 -118 -49 -65 -115 -158
-147 -207 -32 -50 -66 -101 -75 -115 -9 -14 -36 -63 -60 -110 -24 -47 -68
-122 -97 -167 -84 -131 -175 -310 -176 -346 0 -19 9 -50 22 -70 18 -30 29 -37
67 -43 25 -3 62 -4 84 0 22 3 41 2 45 -4 4 -6 61 -10 140 -10 124 0 134 1 128
18 -5 16 -5 16 8 -1 11 -13 26 -16 61 -14 25 1 45 0 43 -4 -5 -8 111 -29 159
-29 21 0 46 5 57 11 17 8 23 7 33 -7 13 -17 15 -17 50 0 49 23 154 19 162 -6
6 -20 34 -24 52 -6 8 8 15 8 26 -1 11 -9 96 -14 296 -18 254 -6 282 -5 293 11
8 10 55 25 132 42 148 31 177 42 118 43 -32 1 -43 5 -43 16 0 9 -6 18 -14 21
-8 3 -12 13 -8 26 3 13 1 19 -5 15 -14 -9 -228 -19 -220 -11 4 4 2 13 -4 20
-9 11 -14 10 -27 -3 -16 -16 -17 -15 -20 6 -2 12 4 32 12 44 9 12 34 47 56 77
22 30 40 59 40 63 0 9 -42 -11 -50 -24 -12 -17 -80 -57 -85 -50 -2 5 6 30 20
55 21 39 23 50 12 66 -6 11 -20 20 -29 20 -20 0 -24 15 -8 25 31 19 97 205
105 295 l5 55 -15 -46 c-8 -25 -25 -57 -37 -70 -23 -25 -39 -55 -53 -94 -7
-19 -7 -19 -16 4 -18 47 -1 109 77 276 12 27 12 28 -1 10 -61 -81 -121 -185
-137 -238 -17 -58 -18 -59 -13 -17 11 91 55 205 112 289 29 43 29 65 0 29 -30
-36 -50 -35 -64 2 -9 25 -9 38 3 66 20 47 11 73 -21 66 -20 -3 -25 1 -31 22
-5 20 -2 31 12 40 16 12 16 16 4 31 -13 15 -15 15 -29 -3 -9 -10 -24 -22 -35
-26 -17 -6 -18 -2 -12 41 6 45 5 44 -17 -22 -42 -126 -65 -155 -133 -169 -30
-7 -31 -6 -26 24 3 22 -1 35 -14 45 -27 20 -45 18 -51 -5 -4 -14 -14 -20 -32
-20 l-26 1 22 18 21 18 -29 27 c-16 16 -36 26 -43 23 -18 -7 -48 26 -41 44 2
8 9 52 15 99 16 138 25 174 46 166 8 -3 14 -1 14 5 0 6 -10 9 -22 7 -14 -2
-34 8 -53 24 -16 15 -43 38 -58 51 l-29 23 13 63 c14 72 38 104 72 96 12 -3
38 -7 57 -9 91 -10 168 -45 224 -101 20 -20 32 -24 49 -19 24 8 28 8 70 6 l27
-2 0 -78 c0 -43 -7 -104 -15 -135 -18 -71 -18 -72 -1 -58 8 7 17 23 20 36 7
26 25 34 27 13 0 -7 11 10 25 37 24 51 65 216 82 335 8 58 7 67 -9 86 -16 17
-18 28 -11 60 11 50 -3 104 -36 143 -20 24 -55 42 -137 72 -246 91 -277 98
-370 78z m230 -499 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0
13 -4 16 -10z m75 -12 c0 -6 9 -8 20 -5 13 3 25 -2 35 -16 14 -20 14 -23 -2
-34 -20 -16 -59 -17 -68 -3 -4 6 -9 26 -11 45 -3 28 -1 33 11 29 8 -4 15 -11
15 -16z m-384 -255 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z
m-14 -88 c4 -5 3 -14 -2 -20 -5 -6 -8 -24 -7 -39 3 -38 -30 -61 -57 -40 -15
10 -17 17 -9 25 7 7 8 21 2 42 -5 18 -9 35 -9 39 0 11 74 5 82 -7z m128 -259
c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m110
-52 c0 -14 -6 -38 -14 -52 -8 -15 -17 -35 -20 -44 -4 -14 -12 -16 -38 -11 -42
8 -44 9 -28 29 14 15 7 26 -23 37 -14 5 11 55 30 60 10 3 35 5 56 6 33 1 37
-1 37 -25z m-147 10 c8 -8 -3 -34 -14 -34 -5 0 -9 9 -9 20 0 19 11 26 23 14z
m293 -92 c-11 -10 -15 4 -8 28 l7 25 3 -23 c2 -13 1 -26 -2 -30z m-86 30 c0
-13 -23 -32 -37 -32 -11 0 -11 5 -3 20 10 19 40 28 40 12z m-810 -277 c44 -34
51 -50 18 -39 -18 5 -15 -1 16 -37 l37 -44 -25 -3 c-29 -4 -78 29 -83 56 -6
34 -12 136 -7 117 3 -11 23 -33 44 -50z m-98 6 c28 -33 51 -71 46 -77 -11 -10
-67 47 -61 62 4 10 0 12 -11 8 -11 -4 -16 -1 -16 10 0 22 22 20 42 -3z m404
-53 c4 -13 7 -54 5 -93 -2 -63 9 -132 38 -222 8 -27 7 -33 -5 -33 -16 0 -23
14 -52 110 -25 83 -34 176 -21 223 11 42 24 47 35 15z m424 -20 c-4 -18 -15
-53 -24 -78 -22 -60 -54 -199 -48 -205 11 -11 41 30 62 83 12 31 39 92 60 135
29 59 39 72 43 57 3 -11 2 -20 -2 -20 -3 0 -7 -21 -7 -47 -1 -37 -20 -135 -34
-173 -1 -3 -3 -43 -3 -90 -2 -78 -4 -85 -21 -82 -24 4 -47 27 -38 37 4 5 1 5
-5 1 -24 -13 -74 -15 -70 -3 2 7 10 12 17 12 7 0 15 7 17 15 4 12 3 12 -5 1
-11 -15 -27 2 -17 19 3 6 1 10 -4 10 -25 0 -109 185 -99 216 1 5 -3 24 -11 42
-16 38 -11 48 18 32 13 -7 21 -21 21 -38 0 -35 23 -132 31 -132 10 0 19 40 19
83 0 21 5 48 11 60 18 33 60 81 78 89 9 4 17 7 17 7 1 1 -2 -14 -6 -31z m-891
-67 c15 -11 58 -35 96 -54 79 -40 98 -37 121 19 30 72 48 40 72 -136 36 -252
37 -269 18 -276 -16 -6 -247 82 -294 112 -27 17 -23 43 12 84 l21 25 -28 -25
c-25 -21 -36 -24 -90 -22 -33 2 -69 8 -79 13 -17 9 -17 11 2 49 11 22 20 46
20 53 0 8 6 20 13 26 8 6 19 30 27 53 12 41 45 98 57 98 3 0 17 -9 32 -19z
m640 -38 c-1 -93 -17 -111 -18 -20 -1 45 3 77 9 77 6 0 10 -25 9 -57z m51
-226 c0 -10 -4 -15 -10 -12 -5 3 -10 18 -10 33 0 21 2 24 10 12 5 -8 10 -23
10 -33z m-640 -151 c0 -19 -22 -34 -28 -18 -2 7 -10 12 -18 12 -18 0 -18 6 4
28 13 14 20 15 30 6 6 -7 12 -19 12 -28z m44 -11 c8 -8 21 -12 29 -9 8 3 17
-2 21 -11 10 -28 -3 -36 -24 -15 -11 11 -26 20 -34 20 -8 0 -16 7 -20 15 -7
19 8 19 28 0z m1506 -19 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10
11 6 0 10 -2 10 -4z"
          />
          <path
            d="M1880 3383 c-23 -9 -31 -27 -17 -38 21 -18 46 -74 36 -80 -17 -11 -9
-23 22 -34 40 -14 40 -14 37 2 -1 6 10 25 26 41 26 26 31 27 41 12 15 -20 45
-21 45 -2 0 8 -12 24 -27 36 l-28 21 48 -4 c55 -5 60 5 15 33 -26 15 -50 20
-108 19 -41 0 -82 -3 -90 -6z"
          />
          <path d="M1900 3071 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" />
        </g>
      </svg>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Logo
