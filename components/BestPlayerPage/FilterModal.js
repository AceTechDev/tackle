import Slider from "../Slider";
import FilterInput from "../FilterInput";
import QuitButton from "../QuitButton";

function FilterModal({ show, showFunc }) {
  return (
    <div
      id="filter"
      className={`${
        show ? "modal_Bg w-full h-full opacity-100" : "opacity-0 hidden"
      } transition-all
      `}>
      <div className="filter_Container">
        <div className="flex flex-col lg:flex-row mb-5 text-[14px] w-full h-full">
          <div className="items-center filter_column">
            Prefered Foot:
            <svg
              className="my-1"
              width="63"
              height="48"
              viewBox="0 0 63 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M47.4443 6.79732e-05C46.9681 -0.00387422 46.4579 0.163605 45.9369 0.51624C45.1789 1.02911 44.4604 1.9367 44.0558 3.10232C43.6509 4.26793 43.6503 5.43114 43.9246 6.31101C44.1989 7.19101 44.6968 7.74991 45.3385 7.97817C45.9803 8.20631 46.7149 8.08563 47.4727 7.57276C48.2307 7.0599 48.949 6.15205 49.3538 4.98643C49.7585 3.82081 49.7593 2.65761 49.485 1.77774C49.2107 0.897742 48.7126 0.338841 48.0709 0.110576C47.8695 0.0389079 47.6578 0.00156477 47.4443 6.79732e-05ZM52.841 3.5839C52.5508 3.58517 52.2376 3.6677 51.9061 3.84014C51.8429 4.48987 51.7024 5.1295 51.4875 5.74511C51.1063 6.84295 50.5247 7.79976 49.8053 8.55857C49.8124 8.59036 49.8193 8.62215 49.8272 8.65292C50.0128 9.38337 50.3814 9.83558 50.8624 10.0371C51.3434 10.2387 51.9173 10.1816 52.5534 9.79552C53.1895 9.40931 53.8234 8.68789 54.2083 7.73376C54.5932 6.77949 54.6406 5.81251 54.455 5.08206C54.2694 4.35161 53.901 3.8994 53.4201 3.69784C53.2365 3.62107 53.0396 3.58233 52.841 3.5839ZM57.4652 7.29134C57.2619 7.29249 57.0388 7.32822 56.7959 7.40388C56.7502 7.41813 56.7032 7.43733 56.6567 7.4545C56.569 7.84887 56.4491 8.23518 56.2982 8.60943C55.8031 9.8366 55.0247 10.8419 54.0807 11.5226C54.1441 12.0351 54.3491 12.4005 54.6556 12.6302C55.024 12.9062 55.5307 12.9853 56.1784 12.7838C56.8261 12.5824 57.5529 12.0787 58.1089 11.3087C58.665 10.5388 58.9203 9.68221 58.9162 8.99246C58.912 8.3027 58.687 7.83371 58.3185 7.55763C58.0882 7.38506 57.8041 7.28956 57.4652 7.29134ZM42.694 8.76368C41.6427 9.67459 40.9917 10.9564 40.6167 13.3203C39.8462 18.1785 41.2554 22.9689 40.8034 29.9701C40.6588 32.2118 39.7142 34.5882 38.7141 36.9333C37.714 39.2783 36.6391 41.5889 36.1381 43.4079C35.8263 44.5401 36.0614 45.3507 36.653 46.0946C37.2448 46.8385 38.2694 47.4592 39.4796 47.7706C41.9001 48.3933 44.8409 47.7851 46.3435 45.4922C51.0751 38.2726 57.0646 28.3269 58.8435 22.9342C58.9226 22.6946 58.9489 22.3985 58.9247 22.0589C58.8639 22.0135 58.804 21.9661 58.7458 21.9148C57.955 21.2171 57.6522 20.1556 57.7227 19.1617C57.7297 19.062 57.7413 18.9623 57.7551 18.8628C57.7232 18.8085 57.6926 18.7547 57.6593 18.6999C57.6543 18.6918 57.649 18.6836 57.6441 18.6755C57.2682 18.59 56.9036 18.4364 56.5689 18.2014C55.6412 17.5501 55.1872 16.4557 55.142 15.3704C55.0735 15.2935 55.0024 15.2169 54.9329 15.1402C54.3615 15.0554 53.8086 14.8437 53.3209 14.4783C52.624 13.9562 52.1799 13.2126 51.9625 12.3994C51.3121 12.4884 50.6432 12.4227 50.0075 12.1563C49.011 11.7386 48.2952 10.9136 47.8851 9.94393C46.8497 10.4063 45.6882 10.5286 44.5887 10.1377C43.8218 9.86496 43.1863 9.37765 42.694 8.76368ZM60.2849 12.1213C60.174 12.31 60.0545 12.4934 59.9267 12.6709C59.241 13.6207 58.3713 14.3349 57.423 14.7585C57.3923 14.9412 57.3782 15.1166 57.3841 15.2763C57.404 15.8085 57.5784 16.1246 57.8282 16.3C58.078 16.4755 58.4277 16.5274 58.9162 16.352C59.4046 16.1767 59.9663 15.7546 60.3868 15.1198C60.8072 14.4851 60.9838 13.7924 60.9641 13.2603C60.9442 12.7281 60.7697 12.4119 60.5198 12.2365C60.4478 12.1862 60.3685 12.1474 60.2849 12.1213ZM62.2426 16.8977C62.151 16.9005 62.0484 16.9149 61.9329 16.9428C61.9022 16.9503 61.8702 16.9613 61.8386 16.9709C61.3978 17.4982 60.8859 17.923 60.3305 18.2286C60.0999 18.6161 59.9783 19.0136 59.9551 19.3382C59.9243 19.7732 60.0349 20.0158 60.1962 20.1581C60.3575 20.3003 60.6064 20.3752 61.0172 20.2754C61.4279 20.1754 61.9364 19.8746 62.3464 19.378C62.7565 18.8814 62.9639 18.315 62.9948 17.8799C63.0256 17.445 62.9151 17.2026 62.7538 17.0603C62.6531 16.9715 62.5178 16.9088 62.3304 16.8987C62.3011 16.8972 62.2719 16.8968 62.2426 16.8977Z"
                fill="#f1c224"
              />
              <path
                opacity="0.2"
                d="M15.5557 6.79732e-05C16.0319 -0.00387422 16.5421 0.163605 17.0631 0.51624C17.8211 1.02911 18.5396 1.9367 18.9442 3.10232C19.3491 4.26793 19.3497 5.43114 19.0754 6.31101C18.8011 7.19101 18.3032 7.74991 17.6615 7.97817C17.0197 8.20631 16.2851 8.08563 15.5273 7.57276C14.7693 7.0599 14.051 6.15205 13.6462 4.98643C13.2415 3.82081 13.2407 2.65761 13.515 1.77774C13.7893 0.897742 14.2874 0.338841 14.9291 0.110576C15.1305 0.0389079 15.3422 0.00156477 15.5557 6.79732e-05ZM10.159 3.5839C10.4492 3.58517 10.7624 3.6677 11.0939 3.84014C11.1571 4.48987 11.2976 5.1295 11.5125 5.74511C11.8937 6.84295 12.4753 7.79976 13.1947 8.55857C13.1876 8.59036 13.1807 8.62215 13.1728 8.65292C12.9872 9.38337 12.6186 9.83558 12.1376 10.0371C11.6566 10.2387 11.0827 10.1816 10.4466 9.79552C9.81052 9.40931 9.17656 8.68789 8.79167 7.73376C8.40677 6.77949 8.35939 5.81251 8.54499 5.08206C8.73059 4.35161 9.09903 3.8994 9.57993 3.69784C9.76348 3.62107 9.96037 3.58233 10.159 3.5839ZM5.53481 7.29134C5.73813 7.29249 5.96118 7.32822 6.20408 7.40388C6.24982 7.41813 6.29681 7.43733 6.34331 7.4545C6.43096 7.84887 6.55088 8.23518 6.70181 8.60943C7.19691 9.8366 7.97525 10.8419 8.91933 11.5226C8.85588 12.0351 8.65093 12.4005 8.34444 12.6302C7.97601 12.9062 7.46935 12.9853 6.82157 12.7838C6.17392 12.5824 5.44711 12.0787 4.89106 11.3087C4.33502 10.5388 4.07967 9.68221 4.08382 8.99246C4.08797 8.3027 4.31302 7.83371 4.68146 7.55763C4.91179 7.38506 5.19591 7.28956 5.53481 7.29134ZM20.306 8.76368C21.3573 9.67459 22.0083 10.9564 22.3833 13.3203C23.1538 18.1785 21.7446 22.9689 22.1966 29.9701C22.3412 32.2118 23.2858 34.5882 24.2859 36.9333C25.286 39.2783 26.3609 41.5889 26.8619 43.4079C27.1737 44.5401 26.9386 45.3507 26.347 46.0946C25.7552 46.8385 24.7306 47.4592 23.5204 47.7706C21.0999 48.3933 18.1591 47.7851 16.6565 45.4922C11.9249 38.2726 5.93542 28.3269 4.15645 22.9342C4.07741 22.6946 4.05115 22.3985 4.07528 22.0589C4.1361 22.0135 4.19603 21.9661 4.25421 21.9148C5.04499 21.2171 5.34783 20.1556 5.27734 19.1617C5.2703 19.062 5.25874 18.9623 5.24492 18.8628C5.27683 18.8085 5.30737 18.7547 5.34067 18.6999C5.34569 18.6918 5.35097 18.6836 5.35587 18.6755C5.73185 18.59 6.09639 18.4364 6.43114 18.2014C7.35877 17.5501 7.81278 16.4557 7.85802 15.3704C7.9265 15.2935 7.99762 15.2169 8.06711 15.1402C8.63849 15.0554 9.19139 14.8437 9.67908 14.4783C10.376 13.9562 10.8201 13.2126 11.0375 12.3994C11.6879 12.4884 12.3568 12.4227 12.9925 12.1563C13.989 11.7386 14.7048 10.9136 15.1149 9.94393C16.1503 10.4063 17.3118 10.5286 18.4113 10.1377C19.1782 9.86496 19.8137 9.37765 20.306 8.76368ZM2.71513 12.1213C2.82598 12.31 2.94549 12.4934 3.07327 12.6709C3.75899 13.6207 4.62868 14.3349 5.57704 14.7585C5.6077 14.9412 5.62177 15.1166 5.61586 15.2763C5.59601 15.8085 5.42159 16.1246 5.17178 16.3C4.92197 16.4755 4.57226 16.5274 4.08382 16.352C3.59538 16.1767 3.03368 15.7546 2.61322 15.1198C2.19276 14.4851 2.01621 13.7924 2.03594 13.2603C2.0558 12.7281 2.23034 12.4119 2.48015 12.2365C2.55223 12.1862 2.63147 12.1474 2.71513 12.1213ZM0.757351 16.8977C0.848957 16.9005 0.951624 16.9149 1.06711 16.9428C1.09777 16.9503 1.12981 16.9613 1.16135 16.9709C1.60217 17.4982 2.1141 17.923 2.66952 18.2286C2.9001 18.6161 3.02174 19.0136 3.04486 19.3382C3.07565 19.7732 2.96507 20.0158 2.80385 20.1581C2.6425 20.3003 2.39357 20.3752 1.98279 20.2754C1.57213 20.1754 1.06359 19.8746 0.653557 19.378C0.24353 18.8814 0.0360641 18.315 0.00515175 17.8799C-0.0256348 17.445 0.0849457 17.2026 0.246168 17.0603C0.346947 16.9715 0.482157 16.9088 0.669641 16.8987C0.698851 16.8972 0.728113 16.8968 0.757351 16.8977Z"
                fill="#f1c224"
              />
            </svg>
            <FilterInput Name="Nationality" />
            <FilterInput Name="Current Club" />
            <FilterInput Name="Desired Payment" />
            <FilterInput Name="Height" />
          </div>
          <div className="filter_column my-4 md:my-0">
            Position:
            <svg
              className="-mt-7 lg:mt-2.5 rotate-90 lg:rotate-0"
              width="152"
              height="265"
              viewBox="0 0 176 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.75"
                y="277.25"
                width="276.5"
                height="174.5"
                transform="rotate(-90 0.75 277.25)"
                stroke="#0873F1"
                strokeWidth="1.5"
              />
              <line x1="3" y1="138.5" x2="176" y2="138.5" stroke="#0873F1" />
              <rect
                x="55.5"
                y="277.5"
                width="31"
                height="65"
                transform="rotate(-90 55.5 277.5)"
                stroke="#0873F1"
              />
              <rect
                x="120.5"
                y="1.5"
                width="31"
                height="65"
                transform="rotate(90 120.5 1.5)"
                stroke="#0873F1"
              />
              <rect
                x="0.5"
                y="0.5"
                width="10"
                height="31"
                transform="matrix(4.37114e-08 1 1 -4.37114e-08 72 267)"
                stroke="#0873F1"
              />
              <rect
                x="-0.5"
                y="-0.5"
                width="10"
                height="31"
                transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 103 11)"
                stroke="#0873F1"
              />
              <path
                d="M88 111.5C103.74 111.5 116.5 124.26 116.5 140C116.5 155.74 103.74 168.5 88 168.5C72.2599 168.5 59.5 155.74 59.5 140C59.5 124.26 72.2599 111.5 88 111.5Z"
                stroke="#0873F1"
              />
              <circle
                cx="89"
                cy="263"
                r="5.5"
                transform="rotate(-90 89 263)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="154"
                cy="216"
                r="5.5"
                transform="rotate(-90 154 216)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="88"
                cy="157"
                r="5.5"
                transform="rotate(-90 88 157)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="88"
                cy="97"
                r="5.5"
                transform="rotate(-90 88 97)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="88"
                cy="25"
                r="5.5"
                transform="rotate(-90 88 25)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="88"
                cy="53"
                r="5.5"
                transform="rotate(-90 88 53)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="116"
                cy="137"
                r="5.5"
                transform="rotate(-90 116 137)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="151"
                cy="44"
                r="5.5"
                transform="rotate(-90 151 44)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="163"
                cy="130"
                r="5.5"
                transform="rotate(-90 163 130)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="16"
                cy="130"
                r="5.5"
                transform="rotate(-90 16 130)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="59"
                cy="137"
                r="5.5"
                transform="rotate(-90 59 137)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="26"
                cy="44"
                r="5.5"
                transform="rotate(-90 26 44)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="110"
                cy="234"
                r="5.5"
                transform="rotate(-90 110 234)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="66"
                cy="234"
                r="5.5"
                transform="rotate(-90 66 234)"
                fill="#696969"
                stroke="white"
              />
              <circle
                cx="22"
                cy="216"
                r="5.5"
                transform="rotate(-90 22 216)"
                fill="#696969"
                stroke="white"
              />
            </svg>
          </div>
          <div className="filter_column items-start lg:items-center">
            Wage/Week:
            <div className="flex w-full lg:w-auto items-center h-12 my-1">
              <Slider
                Class="w-full lg:w-auto mt-2"
                values={true}
                min={0}
                max={100000000}
                defval={0}
              />
            </div>
            <FilterInput Name="Age" />
            <FilterInput Name="Current League" />
            <FilterInput Name="Desired League" />
            <FilterInput Name="Weight" />
          </div>
        </div>
        <button className="filter_btn">Confirm</button>
        <QuitButton
          Class="top-2 right-2 absolute w-4 h-4 opacity-70"
          func={showFunc}
        />
      </div>
    </div>
  );
}

export default FilterModal;
