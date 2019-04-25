import React from "react";

const FAQ = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" height={props.height} width={props.width} {...props}>
  <path d="M509.989 463.656L474.84 361.363c16.906-34.174 25.847-72.265 25.907-110.593.102-66.002-25.435-128.411-71.909-175.727C382.357 27.718 320.418 1.08 254.433.033c-34.571-.555-68.117 5.815-99.757 18.912-30.517 12.633-57.884 30.932-81.34 54.388-23.457 23.456-41.756 50.823-54.388 81.34C5.851 186.313-.512 219.876.035 254.43c1.045 65.985 27.684 127.924 75.009 174.406 47.224 46.383 109.472 71.912 175.332 71.911h.394c38.328-.06 76.419-9.001 110.594-25.907l102.293 35.149A36.74 36.74 0 0 0 475.611 512c9.474 0 18.69-3.722 25.678-10.712 9.929-9.929 13.264-24.349 8.7-37.632zm-30.165 16.168c-1.007 1.007-3.163 2.535-6.304 1.457l-108.394-37.246a15.172 15.172 0 0 0-12.03.938c-31.327 16.573-66.727 25.363-102.374 25.417-119.55.193-218.442-96.91-220.336-216.441-.953-60.139 21.923-116.66 64.414-159.151 42.491-42.49 98.995-65.362 159.151-64.411 119.53 1.895 216.625 100.738 216.439 220.336-.056 35.648-8.845 71.048-25.417 102.373a15.178 15.178 0 0 0-.938 12.03l37.246 108.394c1.079 3.139-.449 5.298-1.457 6.304z" fill={props.color || "currentColor"}/>
  <path d="M247.91 362.748c-7.939 0-15.545 6.981-15.178 15.178.368 8.223 6.669 15.178 15.178 15.178 7.939 0 15.545-6.981 15.178-15.178-.368-8.224-6.669-15.178-15.178-15.178zM247.91 127.674c-41.639 0-75.515 33.876-75.515 75.515 0 8.382 6.796 15.178 15.178 15.178s15.178-6.796 15.178-15.178c0-24.9 20.259-45.159 45.159-45.159s45.159 20.259 45.159 45.159-20.259 45.159-45.159 45.159c-8.382 0-15.178 6.796-15.178 15.178v61.905c0 8.382 6.796 15.178 15.178 15.178 8.382 0 15.178-6.795 15.178-15.179v-48.259c34.389-7.045 60.337-37.54 60.337-73.982 0-41.639-33.876-75.515-75.515-75.515z" fill={props.color || "currentColor"}/>
</svg>
);

export default FAQ;