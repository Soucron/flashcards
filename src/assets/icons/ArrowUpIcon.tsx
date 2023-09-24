import { forwardRef, Ref, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      d="M13.0277 9.67591C13.028 9.83168 12.9738 9.98264 12.8744 10.1026C12.8184 10.1701 12.7497 10.2259 12.6721 10.2668C12.5946 10.3077 12.5097 10.3329 12.4224 10.3409C12.335 10.349 12.247 10.3397 12.1633 10.3137C12.0795 10.2877 12.0017 10.2454 11.9344 10.1892L8.36105 7.20258L4.78105 10.0826C4.71286 10.138 4.63439 10.1793 4.55016 10.2043C4.46594 10.2292 4.37761 10.2373 4.29026 10.228C4.20291 10.2187 4.11825 10.1922 4.04116 10.1501C3.96407 10.108 3.89606 10.0511 3.84105 9.98258C3.78036 9.9136 3.73458 9.83282 3.70658 9.74531C3.67859 9.65781 3.66899 9.56546 3.67838 9.47406C3.68777 9.38266 3.71595 9.2942 3.76115 9.21421C3.80635 9.13422 3.8676 9.06444 3.94105 9.00924L7.94105 5.78924C8.06034 5.69119 8.20996 5.63758 8.36438 5.63758C8.5188 5.63758 8.66843 5.69119 8.78771 5.78924L12.7877 9.12258C12.8684 9.18945 12.9322 9.27441 12.9739 9.37055C13.0156 9.46669 13.034 9.57131 13.0277 9.67591Z"
      fill="#FFFEFE"
    />
  </svg>
)

export default forwardRef(SvgComponent)
