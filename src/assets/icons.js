export function PlusIcon() {
  const icon = (
    <svg width="16" height="16" fill="none">
      <path
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 14.933A6.941 6.941 0 0 1 1.067 8 6.941 6.941 0 0 1 8 1.067 6.941 6.941 0 0 1 14.933 8 6.941 6.941 0 0 1 8 14.933Z"
        fill="#fff"
      />
      <path
        d="M11.429 7.429H8.57V4.57A.55.55 0 0 0 8 4a.55.55 0 0 0-.571.571V7.43H4.57A.55.55 0 0 0 4 8a.55.55 0 0 0 .571.571H7.43v2.858A.55.55 0 0 0 8 12a.55.55 0 0 0 .571-.571V8.57h2.858A.55.55 0 0 0 12 8a.579.579 0 0 0-.571-.571Z"
        fill="#fff"
      />
    </svg>
  )
  return icon
}

export function CloseIcon() {
  const icon = (
    <svg viewBox="0 0 32 32" fill="none" stroke="#FFF">
      <defs></defs>
      <title />
      <g id="cross">
        <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
        <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
      </g>
    </svg>
  )
  return icon
}

export function SearchIcon() {
  const icon = (
    <svg width="24" height="24" fill="none">
      <path
        d="m17.2668 16.1335.2667-.2667c1.3333-1.6667 2-3.7333 2-5.8667 0-2.5333-1-4.9333-2.8-6.7333-1.8-1.8-4.1334-2.8-6.7334-2.8-5.2666 0-9.5333 4.3333-9.5333 9.5333 0 2.5334 1 4.9334 2.8 6.7334 1.8 1.8 4.2 2.8 6.7333 2.8 2.1334 0 4.2-.7334 5.9334-2.0667l.2666-.2.2667.2667 5.9333 5.9333 1.1334-1.1333-6-6-.2667-.2Zm-7.2667 1.8666c-2.1333 0-4.1333-.8-5.6-2.3333-1.4666-1.5333-2.3333-3.5333-2.3333-5.6667 0-2.1333.8-4.1333 2.3333-5.6 1.5334-1.4666 3.4667-2.3333 5.6-2.3333 2.1334 0 4.1334.8 5.6 2.3333 1.4667 1.5334 2.3334 3.4667 2.3334 5.6 0 4.4-3.5334 8-7.9334 8Z"
        fill="#fff"
      />
    </svg>
  )
  return icon
}

export function MenuBarIcon() {
  const icon = (
    <svg width="27" height="14" fill="none">
      <path
        d="M26.025 2.3752H.975c-.525 0-.9-.375-.9-.9s.375-.9.9-.9H26.1c.525 0 .9.375.9.9s-.45.9-.975.9Zm0 5.3247H.975c-.525 0-.9-.375-.9-.9s.375-.9.9-.9H26.1c.525 0 .9.375.9.9-.075.525-.45.9-.975.9Zm.075 5.3999H.9c-.525 0-.9-.375-.9-.9s.375-.9.9-.9h25.2c.525 0 .9.375.9.9s-.375.9-.9.9Z"
        fill="#000"
      />
    </svg>
  )
  return icon
}

// Icones de Setas
export function ArrowTop() {
  const icon = (
    <svg
      fill="#FFF"
      width="30"
      height="30"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m-191.3-296.9-2 2-11.7-11.7-11.7 11.7-2-2 13.7-13.7 13.7 13.7"
        transform="translate(237 335)"
      />
    </svg>
  )
  return icon
}

export function ArrowBottom() {
  const icon = (
    <svg
      fill="#FFF"
      width="30"
      height="30"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7"
        transform="translate(237 335)"
      />
    </svg>
  )
  return icon
}

export function ArrowIconWhite() {
  const icon = (
    <svg width="14" height="8" fill="none">
      <path
        d="M13.147.125a.594.594 0 0 0-.777.07l-5.7 6.463L.97.195C.785-.052.452-.052.193.125a.53.53 0 0 0-.074.741l6.107 6.957A.627.627 0 0 0 6.67 8a.7.7 0 0 0 .444-.177l6.07-6.957a.496.496 0 0 0-.037-.741Z"
        fill="#fff"
      />
    </svg>
  )
  return icon
}

export function ArrowIconDark({ color, className, width = 55 }) {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      version="1.0"
      viewBox="4 4 120 120"
    >
      <g fill={color} className={className}>
        <path d="M64 4C30.916 4 4 30.916 4 64s26.916 60 60 60 60-26.916 60-60S97.084 4 64 4zm0 112c-28.673 0-52-23.327-52-52s23.327-52 52-52 52 23.327 52 52-23.327 52-52 52z" />
        <path d="M57.822 37.307a4 4 0 0 0-5.657 5.657L73.201 64 52.165 85.037a4 4 0 1 0 5.658 5.656l23.864-23.865a4 4 0 0 0 0-5.657L57.822 37.307z" />
      </g>
    </svg>
  )
  return icon
}

export function SimpleArrowRight() {
  const icon = (
    <svg width="16" height="30" fill="none">
      <path
        d="M.2494.419C-.1037.9185-.033 1.7513.3907 2.1678l12.9253 12.825L.3907 27.818c-.4944.4164-.4944 1.1659-.1413 1.7488.3532.4997 1.0595.583 1.4832.1666l13.9142-13.7412c.2119-.2498.3532-.5829.3532-.9993 0-.3331-.1413-.7495-.3532-.9994L1.7326.3357C1.309-.164.6026-.0807.2494.4189Z"
        fill="#000"
      />
    </svg>
  )

  return icon
}

export function SimpleArrowBottom() {
  const icon = (
    <svg width="16" height="8" fill="none">
      <path
        d="M15.7766.1247c-.2665-.1766-.7107-.1412-.9328.0706l-6.84 6.4627-6.84-6.4627C.9417-.0519.5419-.0519.231.1247-.0355.3013-.0799.6544.1422.8663l7.3286 6.9571c.1332.106.311.1766.533.1766.1777 0 .3997-.0706.533-.1766L15.821.8664c.2664-.212.222-.5651-.0444-.7417Z"
        fill="#000"
      />
    </svg>
  )

  return icon
}

export function ArrowLeftLong() {
  const icon = (
    <svg width="20" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.766 12.672a.763.763 0 0 1 0 1.1.816.816 0 0 1-1.132 0L.234 7.55a.763.763 0 0 1 0-1.1l6.4-6.222a.816.816 0 0 1 1.132 0 .763.763 0 0 1 0 1.1L2.73 6.222H19.2c.442 0 .8.348.8.778a.79.79 0 0 1-.8.778H2.731l5.035 4.894Z"
        fill="#fff"
      />
    </svg>
  )

  return icon
}

export function PlayIcon() {
  const icon = (
    <svg
      width="173"
      height="211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12.81C0 3.326 10.482-2.41 18.47 2.703l148.937 95.34c7.474 4.786 7.349 15.747-.233 20.36L18.237 209.006C10.24 213.871 0 208.114 0 198.754V12.81Z"
        fill="#E0E0E0"
      />
    </svg>
  )
  return icon
}

export function CalendarIcon() {
  const icon = (
    <svg width="20" height="20" fill="none">
      <path
        d="M15.5016 1.9297h-11c-2.025 0-3.6666 1.728-3.6666 3.8596v9.6492c0 2.1316 1.6416 3.8596 3.6666 3.8596h11c2.0251 0 3.6667-1.728 3.6667-3.8596V5.7893c0-2.1316-1.6416-3.8596-3.6667-3.8596ZM.835 7.7193h18.3333M6.335 0v3.8596V0Zm7.3333 0v3.8596V0Z"
        stroke="#0046C0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return icon
}

export function IconMic() {
  const icon = (
    <svg width="10" height="16" fill="none">
      <path
        d="M.5 6.5A.5.5 0 0 1 1 7v1a3.9999 3.9999 0 0 0 6.8284 2.8284A3.9999 3.9999 0 0 0 9 8V7a.5.5 0 1 1 1 0v1a4.9998 4.9998 0 0 1-4.5 4.975V15h3a.5002.5002 0 0 1 .5.5.5002.5002 0 0 1-.5.5h-7a.5002.5002 0 0 1-.5-.5.5002.5002 0 0 1 .5-.5h3v-2.025A5 5 0 0 1 0 8V7a.5.5 0 0 1 .5-.5Z"
        fill="#0046C0"
      />
      <path
        d="M7 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5ZM5 0a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V3a3 3 0 0 0-3-3Z"
        fill="#0046C0"
      />
    </svg>
  )

  return icon
}

export function IconVideo() {
  const icon = (
    <svg width="10" height="11" fill="none">
      <path
        d="m9.0455 6.241-7.1584 3.9227C1.2796 10.4962.5 10.0936.5 9.4231V1.5776C.5.9082 1.2785.5045 1.8871.8381L9.0455 4.761a.8794.8794 0 0 1 .333.3121c.0799.13.122.2776.122.4279a.816.816 0 0 1-.122.4279.8794.8794 0 0 1-.333.3121Z"
        fill="#0046C0"
      />
    </svg>
  )

  return icon
}

export function ClockIcon() {
  const icon = (
    <svg width="20" height="20" fill="none">
      <path
        d="M10 .1855C4.486.1855 0 4.63 0 10.0927s4.486 9.9071 10 9.9071 10-4.4443 10-9.9071S15.514.1855 10 .1855Zm0 17.8329c-4.411 0-8-3.5557-8-7.9257S5.589 2.167 10 2.167s8 3.5556 8 7.9257c0 4.37-3.589 7.9257-8 7.9257Z"
        fill="#0046C0"
      />
      <path
        d="M10.4167 5.1387H8.75v6.1919h5v-2.064h-3.3333v-4.128Z"
        fill="#0046C0"
      />
    </svg>
  )

  return icon
}

export function ViewsIcon() {
  const icon = (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.2047 8.745C22.3226 6.46324 20.7912 4.48996 18.7998 3.06906C16.8084 1.64817 14.4443 0.84193 11.9997 0.75C9.55507 0.84193 7.19097 1.64817 5.19958 3.06906C3.20819 4.48996 1.6768 6.46324 0.794681 8.745C0.735106 8.90978 0.735106 9.09022 0.794681 9.255C1.6768 11.5368 3.20819 13.51 5.19958 14.9309C7.19097 16.3518 9.55507 17.1581 11.9997 17.25C14.4443 17.1581 16.8084 16.3518 18.7998 14.9309C20.7912 13.51 22.3226 11.5368 23.2047 9.255C23.2643 9.09022 23.2643 8.90978 23.2047 8.745ZM11.9997 15.75C8.02468 15.75 3.82468 12.8025 2.30218 9C3.82468 5.1975 8.02468 2.25 11.9997 2.25C15.9747 2.25 20.1747 5.1975 21.6972 9C20.1747 12.8025 15.9747 15.75 11.9997 15.75Z"
        fill="#0046C0"
      />
      <path
        d="M12 4.5C11.11 4.5 10.24 4.76392 9.49994 5.25839C8.75991 5.75285 8.18314 6.45566 7.84254 7.27793C7.50195 8.10019 7.41283 9.00499 7.58647 9.87791C7.7601 10.7508 8.18869 11.5526 8.81802 12.182C9.44736 12.8113 10.2492 13.2399 11.1221 13.4135C11.995 13.5872 12.8998 13.4981 13.7221 13.1575C14.5443 12.8169 15.2471 12.2401 15.7416 11.5001C16.2361 10.76 16.5 9.89002 16.5 9C16.5 7.80653 16.0259 6.66193 15.182 5.81802C14.3381 4.97411 13.1935 4.5 12 4.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45543 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05765 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C15 9.79565 14.6839 10.5587 14.1213 11.1213C13.5587 11.6839 12.7957 12 12 12Z"
        fill="#0046C0"
      />
    </svg>
  )

  return icon
}

export function IconCheck() {
  const icon = (
    <svg width="43" height="30" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.3003.676c.9329.9011.9329 2.3623 0 3.2635L16.0225 29.324c-.9328.9012-2.4455.9012-3.3784 0L.6997 17.7856c-.933-.9012-.933-2.3624 0-3.2635.933-.9012 2.4455-.9012 3.3784 0l10.2552 9.9066L38.9219.6759c.933-.9012 2.4455-.9012 3.3784 0Z"
        fill="#319CFF"
      />
    </svg>
  )

  return icon
}

export function CrossIcon() {
  return (
    <svg width="16" height="16" fill="none">
      <path
        d="m9.0646 7.9922 6.7006-6.694c.3131-.3129.3131-.7508 0-1.0636-.3131-.3128-.7515-.3128-1.0646 0L8 6.9286 1.2994.2346C.9863-.0782.548-.0782.2348.2346c-.313.3128-.313.7507 0 1.0635l6.7006 6.694-6.7006 6.6941c-.313.3128-.313.7508 0 1.0636.1253.1251.3131.2502.501.2502s.3758-.0626.501-.2502L8 9.0558l6.7006 6.694c.1252.1251.3131.2502.501.2502.1878 0 .3757-.0626.501-.2502.3131-.3128.3131-.7508 0-1.0636l-6.638-6.694Z"
        fill="#000"
      />
    </svg>
  )
}

// Icone utilizado para o tipo de post
export const TypeIcon = ({ type }) => {
  return (
    <>
      {type !== 'podcast' && type !== 'video' ? (
        <ClockIcon />
      ) : type === 'podcast' ? (
        <IconMic />
      ) : (
        <IconVideo />
      )}
    </>
  )
}

//Icone de Social Medias
export const ShareIcon = () => {
  return (
    <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.75 14.443c-.76 0-1.461.248-2.01.662l-5.526-3.718a3.712 3.712 0 0 0 0-1.429l5.525-3.717c.55.414 1.251.662 2.011.662 1.765 0 3.2-1.335 3.2-2.977 0-1.641-1.435-2.976-3.2-2.976-1.765 0-3.2 1.335-3.2 2.976 0 .288.043.563.125.826L8.427 8.287c-.778-.96-2.016-1.583-3.41-1.583C2.659 6.704.75 8.48.75 10.673c0 2.192 1.91 3.968 4.267 3.968 1.394 0 2.632-.622 3.41-1.582l5.248 3.534c-.082.263-.125.54-.125.826 0 1.642 1.435 2.976 3.2 2.976 1.765 0 3.2-1.334 3.2-2.976s-1.435-2.976-3.2-2.976Zm0-11.806c.765 0 1.387.578 1.387 1.29 0 .711-.622 1.29-1.387 1.29s-1.387-.579-1.387-1.29c0-.712.622-1.29 1.387-1.29ZM5.017 12.855c-1.294 0-2.347-.98-2.347-2.182 0-1.203 1.053-2.183 2.347-2.183 1.293 0 2.346.98 2.346 2.183 0 1.203-1.053 2.182-2.346 2.182ZM16.75 18.71c-.765 0-1.387-.578-1.387-1.29 0-.712.622-1.29 1.387-1.29s1.387.578 1.387 1.29c0 .712-.622 1.29-1.387 1.29Z"
        fill="#fff"
      />
    </svg>
  )
}

export const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="30px"
      viewBox="0 0 24 24"
    >
      <path
        fill="#00A1FC"
        d="M0 12.07C0 18.03 4.33 22.99 10 24v-8.67H7V12h3V9.33c0-3 1.93-4.66 4.67-4.66.86 0 1.8.13 2.66.26V8H15.8c-1.47 0-1.8.73-1.8 1.67V12h3.2l-.53 3.33H14V24c5.67-1 10-5.97 10-11.93C24 5.43 18.6 0 12 0S0 5.43 0 12.07Z"
      />
    </svg>
  )
}

export const Twitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="30px"
      viewBox="0 0 24 24"
    >
      <path
        fill="#00A1FC"
        d="M24 2.85c-.88.48-1.83.8-2.83.95A6.02 6.02 0 0 0 23.34.45a8.8 8.8 0 0 1-3.13 1.47 4.73 4.73 0 0 0-2.8-1.84 4.14 4.14 0 0 0-3.12.64 5.74 5.74 0 0 0-2.16 2.84 7.35 7.35 0 0 0-.31 3.88A12 12 0 0 1 6.2 5.61a14.99 14.99 0 0 1-4.53-4.5 7.22 7.22 0 0 0-.08 5.91 5.8 5.8 0 0 0 1.6 2.18 4.24 4.24 0 0 1-2.22-.76v.08c0 1.4.39 2.76 1.1 3.84a4.87 4.87 0 0 0 2.85 2.1c-.73.24-1.5.28-2.23.1.32 1.2.93 2.26 1.75 3.01a4.37 4.37 0 0 0 2.85 1.2A8.78 8.78 0 0 1 0 21.27 12.11 12.11 0 0 0 7.55 24c9.06 0 14-9.23 14-17.23v-.79c.96-.85 1.79-1.91 2.45-3.13Z"
      />
    </svg>
  )
}

export const Whatsapp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="30px"
      viewBox="0 0 24 24"
    >
      <path
        fill="#00A1FC"
        d="M22.2 5.55A12.19 12.19 0 0 0 5.6 1.8a11.95 11.95 0 0 0-3.74 16.5l.3.45-1.2 4.5 4.5-1.2.44.3a12.26 12.26 0 0 0 12.57-.15A12.26 12.26 0 0 0 22.2 5.55ZM19.07 17.1a3.4 3.4 0 0 1-2.39 1.65c-.6 0-1.35.3-4.34-.9a15.32 15.32 0 0 1-6.13-5.4A6.9 6.9 0 0 1 4.7 8.7c0-1.2.45-2.25 1.2-3 .3-.3.6-.45.9-.45h.75c.3 0 .6 0 .74.6.3.75 1.05 2.55 1.05 2.7.15.15.15.45 0 .6.15.3 0 .6-.15.75-.15.15-.3.45-.45.6-.3.15-.45.45-.3.75.6.9 1.35 1.8 2.1 2.55.9.75 1.8 1.35 2.84 1.8.3.15.6.15.75-.15.15-.3.9-1.05 1.2-1.35.3-.3.44-.3.74-.15l2.4 1.2c.3.15.6.3.74.45.15.45.15 1.05-.15 1.5Z"
      />
    </svg>
  )
}

export const Linkedin = () => {
  return (
    <svg
      width="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.005A2.005 2.005 0 0 1 2.005 0h19.988A2.004 2.004 0 0 1 24 2.005v19.988A2.005 2.005 0 0 1 21.994 24H2.005A2.006 2.006 0 0 1 0 21.994V2.005Zm9.5 7.146h3.25v1.632C13.218 9.844 14.417 9 16.221 9c3.457 0 4.276 1.869 4.276 5.297v6.352H17v-5.57c0-1.953-.47-3.055-1.66-3.055-1.653 0-2.34 1.188-2.34 3.055v5.57H9.5V9.15Zm-6 11.348H7V9H3.5V20.499Zm4-15.25a2.25 2.25 0 1 1-4.5.1 2.25 2.25 0 0 1 4.5-.1Z"
        fill="#00A1FC"
      />
    </svg>
  )
}
