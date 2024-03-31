interface VectorPigProps{
  className?:string;
  startColor:string;
  endColor:string;
}
export default function VectorPig({className,startColor,endColor}:VectorPigProps) {
  return (
    <>
      <svg
        className={className}
        width="728"
        height="141"
        viewBox="0 0 728 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.30835 70.8467C10.6791 44.5799 33.8932 33.5597 61.23 32.602C86.7649 31.7075 116.635 39.4197 140.518 47.6822C259.358 88.796 133.856 176.383 141.14 89.5026C142.861 68.9672 154.391 54.052 167.569 39.1316C187.443 16.6297 208.079 13.2477 237.373 11.1477C288.687 7.4692 326.388 23.192 353.506 73.3341C380.737 123.686 318.025 121.403 318.526 87.326C318.922 60.4347 351.411 15.917 379.158 7.57198C403.982 0.106048 447.868 -0.83817 472.515 10.8368C495.63 21.7859 512.266 49.0283 524.674 70.5357C532.372 83.8779 535.686 105.211 525.996 118.652C504.238 148.833 460.582 145.904 462.643 105.36C463.417 90.1426 474.646 73.4855 484.409 62.296C495.088 50.0552 505.075 39.7933 521.409 29.4927C590.081 -13.8128 700.342 35.7538 725.692 68.0483"
          stroke="url(#paint0_linear_129_45)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_129_45"
            x1="639.802"
            y1="70.4386"
            x2="2.30835"
            y2="70.4386"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={startColor} />
            <stop offset="1" stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}
