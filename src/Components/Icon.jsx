import React from 'react'
import './aIcons.sass'
const Icon = (props) => {

    const renderIcon = () => {
        switch (props.icon) {
            case "Github":
                return (
                    <svg viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.5654 0.146973C9.81503 0.146973 0.297729 9.66428 0.297729 21.4147C0.297729 30.8257 6.38561 38.7745 14.8395 41.5924C15.9029 41.7785 16.3017 41.1405 16.3017 40.5822C16.3017 40.0771 16.2751 38.4023 16.2751 36.6211C10.9316 37.6047 9.54919 35.3185 9.12383 34.1222C8.88457 33.5107 7.84777 31.6232 6.94389 31.1181C6.19952 30.7193 5.13614 29.7357 6.91731 29.7091C8.59214 29.6825 9.78845 31.251 10.1872 31.889C12.1013 35.1058 15.1585 34.2019 16.3814 33.6436C16.5675 32.2612 17.1258 31.3308 17.7373 30.7991C13.0052 30.2674 8.06045 28.433 8.06045 20.2981C8.06045 17.9853 8.88457 16.0712 10.2404 14.5824C10.0277 14.0507 9.28334 11.8708 10.4531 8.94649C10.4531 8.94649 12.2342 8.38821 16.3017 11.1264C18.0031 10.6479 19.8109 10.4086 21.6186 10.4086C23.4264 10.4086 25.2341 10.6479 26.9355 11.1264C31.003 8.36163 32.7842 8.94649 32.7842 8.94649C33.9539 11.8708 33.2095 14.0507 32.9968 14.5824C34.3527 16.0712 35.1768 17.9587 35.1768 20.2981C35.1768 28.4596 30.2055 30.2674 25.4734 30.7991C26.2443 31.4637 26.909 32.7397 26.909 34.7336C26.909 37.5782 26.8824 39.8644 26.8824 40.5822C26.8824 41.1405 27.2811 41.8051 28.3445 41.5924C32.5665 40.167 36.2352 37.4535 38.8342 33.8339C41.4333 30.2143 42.8319 25.8708 42.8332 21.4147C42.8332 9.66428 33.3159 0.146973 21.5654 0.146973Z" fill="white" />
                    </svg>
                )
                break;
            case "HTML":
                return (
                    <svg viewBox="0 0 39 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.87057 0.120361H7.12473V2.39199H9.18723V0.120361H11.4414V6.99686H9.18723V4.69549H7.12473V6.99686H4.87265V0.120361H4.87057Z" fill="white" />
                        <path d="M14.4039 2.40049H12.4206V0.120361H18.6435V2.40049H16.6581V6.99686H14.4039V2.40049Z" fill="white" />
                        <path d="M19.6309 0.120361H21.9809L23.4268 2.53649L24.8705 0.120361H27.2205V6.99686H24.9768V3.58836L23.4268 6.03424H23.3872L21.8351 3.59049V6.99686H19.6309V0.120361Z" fill="white" />
                        <path d="M28.3412 0.120361H30.5974V4.72524H33.7641V6.99899H28.3412V0.120361Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.79961 47.0233L0.537109 10.144H38.0371L33.7725 47.0191L19.2663 51.1203L4.79961 47.0233ZM13.4184 26.8358L13.0142 22.2033H29.9829L30.3788 17.6813H8.17044L9.36628 31.36H24.735L24.2204 37.225L19.2746 38.5892H19.2704L14.3329 37.2292L14.0163 33.6231H9.56211L10.1829 40.7248L19.2663 43.2961L28.3642 40.7248L29.4725 28.0513L29.5809 26.838H13.4184V26.8358Z" fill="white" />
                    </svg>
                )
                break;
            case "Java":
                return (
                    <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.128 32.022C38.4767 32.022 37.8051 31.7726 37.1131 31.2739C36.4212 30.7752 35.8446 30.1241 35.3832 29.3207C35.6275 29.3484 35.8174 29.3622 35.9531 29.3622C37.0385 29.3622 37.9611 29.099 38.7209 28.5726C39.4807 28.0462 39.8606 27.4229 39.8606 26.7025C39.8606 26.0099 39.5214 25.4142 38.843 24.9155C38.1646 24.4168 37.3234 24.1259 36.3194 24.0428C35.2069 24.8186 33.3142 25.4558 30.6413 25.9545C27.9685 26.4532 24.9632 26.7025 21.6255 26.7025C17.311 26.7025 13.6273 26.3077 10.5746 25.5181C7.5218 24.7285 5.99543 23.7935 5.99543 22.713C5.99543 21.8818 6.8909 21.1338 8.68185 20.4688C9.06175 21.4662 10.6085 22.3112 13.322 23.0039C16.0356 23.6965 19.2376 24.0428 22.928 24.0428C25.9943 24.0428 28.7486 23.7935 31.1908 23.2948C33.633 22.7961 35.3697 22.1589 36.4008 21.3831C36.7265 21.6325 36.9571 21.8818 37.0928 22.1312C37.7983 21.6325 38.4767 21.3831 39.128 21.3831C40.0506 21.3831 40.8375 21.9026 41.4887 22.9415C42.14 23.9805 42.4656 25.2342 42.4656 26.7025C42.4656 28.1709 42.14 29.4246 41.4887 30.4635C40.8375 31.5025 40.0506 32.022 39.128 32.022ZM24.2305 13.3624C24.2305 14.2767 24.3662 15.094 24.6376 15.8143C24.9089 16.5347 25.2074 17.1026 25.533 17.5182C25.8587 17.9338 26.1572 18.481 26.4285 19.1598C26.6999 19.8385 26.8355 20.5797 26.8355 21.3831C26.6999 21.3 26.5167 21.1892 26.286 21.0506C26.0554 20.9121 25.6348 20.5866 25.0242 20.074C24.4137 19.5615 23.8846 19.0212 23.4368 18.4533C22.9891 17.8853 22.5753 17.1442 22.1954 16.2299C21.8155 15.3156 21.6255 14.3598 21.6255 13.3624C21.6255 12.4481 22.0529 11.4854 22.9077 10.4741C23.7624 9.46289 24.7732 8.60403 25.9401 7.89754C27.1069 7.19105 28.2602 6.60232 29.3999 6.13132C30.5395 5.66033 31.4215 5.43869 32.0456 5.4664C31.5571 5.4664 30.6956 5.89583 29.4609 6.75469C28.2262 7.61356 27.0458 8.69407 25.9197 9.99622C24.7936 11.2984 24.2305 12.4204 24.2305 13.3624ZM16.4155 14.7338C16.4155 15.7035 16.6326 16.7425 17.0667 17.8507C17.5009 18.9589 17.9351 19.8316 18.3692 20.4688L19.0205 21.4247C17.718 21.4247 16.524 20.7182 15.4386 19.3052C14.3532 17.8922 13.8105 16.3684 13.8105 14.7338C13.8105 14.0135 14.0818 13.2862 14.6245 12.552C15.1673 11.8178 15.8185 11.1529 16.5783 10.5573C17.3381 9.96159 18.0979 9.40055 18.8577 8.87415C19.6175 8.34775 20.2687 7.82828 20.8114 7.31573C21.3542 6.80318 21.6255 6.35297 21.6255 5.96509C21.6255 5.18934 21.5848 4.51056 21.5034 3.92875C21.422 3.34694 21.1981 2.68201 20.8318 1.93397C20.4655 1.18592 19.9431 0.590258 19.2647 0.146973C20.9471 0.34091 22.1954 0.957354 23.0094 1.9963C23.8235 3.03525 24.2305 4.35818 24.2305 5.96509C24.2305 6.85166 23.9592 7.64127 23.4165 8.3339C22.8738 9.02653 22.2225 9.59449 21.4627 10.0378C20.7029 10.4811 19.9431 10.9105 19.1833 11.3261C18.4235 11.7417 17.7723 12.2334 17.2296 12.8014C16.6868 13.3693 16.4155 14.0135 16.4155 14.7338ZM21.6255 34.6817C25.6144 34.6817 28.6129 34.2384 30.621 33.3518C31.5707 33.7674 32.0456 34.2107 32.0456 34.6817C32.0456 35.402 31.028 36.0254 28.9928 36.5518C26.9577 37.0782 24.5019 37.3414 21.6255 37.3414C18.7491 37.3414 16.2934 37.0782 14.2582 36.5518C12.223 36.0254 11.2055 35.402 11.2055 34.6817C11.2055 34.2107 11.6803 33.7674 12.6301 33.3518C14.6381 34.2384 17.6366 34.6817 21.6255 34.6817ZM8.60044 29.3622C8.60044 28.8913 9.18386 28.448 10.3507 28.0324C12.8743 28.919 16.6326 29.3622 21.6255 29.3622C26.6185 29.3622 30.3767 28.919 32.9003 28.0324C34.0672 28.448 34.6506 28.8913 34.6506 29.3622C34.6506 30.0826 33.3752 30.706 30.8245 31.2324C28.2737 31.7588 25.2006 32.022 21.6052 32.022C18.0097 32.022 14.9434 31.7588 12.4062 31.2324C9.86903 30.706 8.60044 30.0826 8.60044 29.3622ZM5.99543 34.6817C5.99543 35.6514 6.69417 36.5449 8.09165 37.3622C9.48913 38.1795 11.3886 38.8236 13.7901 39.2946C16.1916 39.7656 18.8034 40.0011 21.6255 40.0011C24.4476 40.0011 27.0594 39.7656 29.4609 39.2946C31.8624 38.8236 33.7619 38.1795 35.1594 37.3622C36.5569 36.5449 37.2556 35.6514 37.2556 34.6817C37.2556 34.3769 37.1742 34.0722 37.0114 33.7674C40.6475 34.7648 42.4656 35.9561 42.4656 37.3414C42.4656 38.3111 41.5362 39.2046 39.6774 40.0219C37.8187 40.8392 35.2883 41.4833 32.0863 41.9543C28.8843 42.4253 25.3974 42.6608 21.6255 42.6608C17.8537 42.6608 14.3668 42.4253 11.1648 41.9543C7.96276 41.4833 5.43237 40.8392 3.57358 40.0219C1.71479 39.2046 0.7854 38.3111 0.7854 37.3414C0.7854 35.9561 2.60348 34.7648 6.23965 33.7674C6.07684 34.0722 5.99543 34.3769 5.99543 34.6817Z" fill="white" />
                    </svg>
                )
                break;
            case "JS":
                return (
                    <svg viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.963867 0.620361H41.9639V42.6204H0.963867V0.620361ZM32.3067 35.8304C30.4053 35.8304 29.3307 34.8154 28.5056 33.4329L25.3742 35.2966C26.5052 37.5856 28.8165 39.3321 32.3955 39.3321C36.0547 39.3321 38.7795 37.3861 38.7795 33.8319C38.7795 30.5366 36.9311 29.0719 33.658 27.6316L32.6945 27.2099C31.0408 26.4749 30.325 25.9971 30.325 24.8124C30.325 23.8551 31.0425 23.1219 32.17 23.1219C33.2753 23.1219 33.9877 23.5996 34.6488 24.8124L37.6486 22.8401C36.3793 20.5529 34.6197 19.6796 32.17 19.6796C28.7294 19.6796 26.5274 21.9336 26.5274 24.8946C26.5274 28.1059 28.3724 29.6266 31.1535 30.8394L32.117 31.2629C33.8749 32.0504 34.9221 32.5299 34.9221 33.8826C34.9221 35.0131 33.9022 35.8304 32.3067 35.8304ZM17.3758 35.8041C16.0519 35.8041 15.5001 34.8766 14.8953 33.7741L11.7588 35.7201C12.6677 37.6906 14.4546 39.3251 17.5381 39.3251C20.9531 39.3251 23.2918 37.4649 23.2918 33.3786V19.9036H19.4395V33.3261C19.4395 35.2984 18.64 35.8041 17.3741 35.8041H17.3758Z" fill="white" />
                    </svg>
                )
                break;
            case "Photoshop":
                return (
                    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.7568 41.2624H0.316162V0.634277H41.7568V41.2624ZM33.2105 17.8547V14.7037C32.6811 14.4726 29.6499 13.6225 27.2552 14.5184C23.8056 15.8088 23.9295 19.6962 25.2385 21.2219C26.9346 23.1987 31.1537 23.9357 30.4633 25.8761C30.1057 26.8808 28.4367 27.0557 26.9652 26.7184C25.595 26.4043 24.4035 25.6086 24.4035 25.6086V28.9449C24.4035 28.9449 25.5812 29.5886 27.0266 29.7418C28.8795 29.938 31.2021 29.5674 32.3657 28.5535C34.4369 26.7485 34.755 22.7499 30.8299 20.8932C27.5636 19.3482 27.6174 18.9072 27.6403 18.1147C27.671 17.0533 29.9441 16.4 33.2105 17.8547ZM15.5966 9.01183C18.3143 9.10452 22.3082 10.3325 22.3082 15.5687C22.3082 20.8048 17.4216 22.5231 12.9628 22.1487V29.5627H9.64111V9.08127C9.64111 9.08127 12.8788 8.91915 15.5966 9.01183ZM16.4592 18.905C17.8914 18.3926 18.8224 17.2912 18.8224 15.5802C18.8224 13.7661 17.875 12.5377 16.426 12.1907C14.857 11.8148 12.9628 12.0363 12.9628 12.0363V19.1815C12.9628 19.1815 15.5848 19.2178 16.4592 18.905Z" fill="white" />
                    </svg>
                )
                break;
            case "React":
                return (
                    <svg viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.8591 19.6248C42.8591 16.837 39.3683 14.1948 34.0155 12.5573C35.2516 7.10281 34.7028 2.76168 32.2833 1.37132C31.697 1.04297 31.0335 0.877691 30.3617 0.892678V2.80376C30.7562 2.80376 31.0735 2.88265 31.34 3.02818C32.5059 3.69793 33.0126 6.2437 32.6181 9.52058C32.5235 10.3271 32.3692 11.1757 32.1798 12.0418C30.3873 11.6099 28.5681 11.2977 26.7341 11.1073C25.6416 9.59999 24.4496 8.16729 23.1662 6.81877C25.9627 4.22041 28.5873 2.79674 30.3722 2.79674V0.883911C28.0123 0.883911 24.9247 2.56531 21.8021 5.48102C18.6813 2.5846 15.592 0.918977 13.2338 0.918977V2.83006C15.0099 2.83006 17.6434 4.24671 20.4398 6.82754C19.2388 8.0899 18.0378 9.52058 16.8965 11.1073C15.0587 11.2956 13.2362 11.6107 11.442 12.0506C11.2439 11.1932 11.0983 10.3622 10.9949 9.56442C10.5916 6.28578 11.0896 3.74001 12.2485 3.06324C12.5045 2.90895 12.8394 2.83882 13.2338 2.83882V0.927743C12.515 0.927743 11.861 1.08203 11.2965 1.40639C8.8857 2.79674 8.34569 7.12735 9.58877 12.566C4.25353 14.2141 0.780273 16.8458 0.780273 19.6248C0.780273 22.4125 4.27106 25.0547 9.62383 26.6905C8.38777 32.1467 8.93655 36.4878 11.3561 37.8764C11.9136 38.2025 12.5658 38.3568 13.2847 38.3568C15.6446 38.3568 18.7321 36.6754 21.8547 33.7597C24.9756 36.6579 28.0631 38.3218 30.423 38.3218C31.1 38.3361 31.7686 38.1703 32.3604 37.8414C34.7712 36.4528 35.3112 32.1222 34.0681 26.6835C39.3858 25.0459 42.8591 22.4037 42.8591 19.6248ZM31.6907 13.9038C31.3575 15.0502 30.9714 16.1805 30.5335 17.2911C29.8167 15.8968 29.0296 14.5398 28.1753 13.2253C29.3939 13.4059 30.5686 13.6285 31.6924 13.9038H31.6907ZM27.7633 23.0384C27.0953 24.1956 26.408 25.2949 25.6962 26.3153C23.1228 26.5421 20.5346 26.545 17.9607 26.324C16.4843 24.2152 15.1932 21.9825 14.1017 19.6511C15.1915 17.3141 16.4772 15.0736 17.9449 12.9535C20.5177 12.7262 23.1053 12.7227 25.6786 12.943C26.3905 13.9634 27.0865 15.0539 27.7545 16.2041C28.4068 17.3262 28.9994 18.4658 29.5394 19.616C28.9934 20.7801 28.4009 21.9218 27.7633 23.0384ZM30.5335 21.9233C30.9964 23.0717 31.3926 24.2219 31.717 25.3369C30.5949 25.6122 29.4096 25.8436 28.1841 26.0225C29.0349 24.696 29.819 23.3279 30.5335 21.9233ZM21.8372 31.0754C21.0395 30.2514 20.2417 29.3344 19.4527 28.3298C20.2242 28.3649 21.0132 28.3912 21.8109 28.3912C22.6174 28.3912 23.4152 28.3736 24.1954 28.3298C23.4239 29.3344 22.6262 30.2514 21.8372 31.0754ZM15.4553 26.0225C14.2731 25.8512 13.0995 25.6254 11.9382 25.3457C12.2555 24.2394 12.65 23.098 13.0953 21.9584C13.4477 22.6422 13.8177 23.3294 14.2209 24.0167C14.6242 24.7023 15.0345 25.372 15.4553 26.0225ZM21.7934 8.17406C22.5911 8.99811 23.3889 9.91507 24.1778 10.9197C23.4064 10.8846 22.6174 10.8583 21.8197 10.8583C21.0132 10.8583 20.2154 10.8759 19.4352 10.9197C20.2067 9.91507 21.0044 8.99811 21.7934 8.17406ZM15.4465 13.227C14.5959 14.5506 13.8118 15.9158 13.0971 17.3174C12.6469 16.1996 12.2519 15.0604 11.9136 13.9038C13.0357 13.6373 14.2209 13.4059 15.4465 13.227ZM7.6847 23.9641C4.64802 22.6702 2.68434 20.9713 2.68434 19.6248C2.68434 18.2782 4.64802 16.5705 7.6847 15.2854C8.42108 14.968 9.22759 14.684 10.0604 14.4193C10.5496 16.0989 11.193 17.8487 11.989 19.6423C11.2375 21.3293 10.6019 23.0655 10.0867 24.839C9.27221 24.5868 8.47059 24.2948 7.6847 23.9641ZM12.2993 36.2196C11.1334 35.5533 10.6267 33.0041 11.0212 29.7289C11.1159 28.9224 11.2702 28.0721 11.4595 27.206C13.1392 27.618 14.9749 27.9353 16.9052 28.1422C17.9978 29.6495 19.1898 31.0822 20.4731 32.4307C17.6767 35.0291 15.052 36.4528 13.2672 36.4528C12.9304 36.4564 12.598 36.3769 12.2993 36.2213V36.2196ZM32.6444 29.6851C33.0477 32.962 32.5498 35.5095 31.3908 36.1863C31.1349 36.3406 30.8 36.4089 30.4055 36.4089C28.6294 36.4089 25.996 34.994 23.1995 32.4114C24.4005 31.1526 25.6015 29.7202 26.7429 28.1334C28.5806 27.9452 30.4031 27.63 32.1974 27.1902C32.3955 28.0563 32.548 28.8873 32.6444 29.6851ZM35.9459 23.9641C35.2095 24.2815 34.403 24.5655 33.5702 24.8303C33.0459 23.0477 32.4016 21.3027 31.6416 19.6072C32.4305 17.8241 33.0635 16.0831 33.5439 14.4105C34.3942 14.6752 35.199 14.968 35.9546 15.2854C38.9913 16.5793 40.955 18.2782 40.955 19.6248C40.9462 20.9713 38.9826 22.679 35.9459 23.9641Z" fill="white" />
                        <path d="M21.811 23.5451C22.8507 23.5451 23.8479 23.1321 24.5831 22.3969C25.3183 21.6617 25.7313 20.6645 25.7313 19.6248C25.7313 18.585 25.3183 17.5879 24.5831 16.8527C23.8479 16.1175 22.8507 15.7044 21.811 15.7044C20.7712 15.7044 19.7741 16.1175 19.0389 16.8527C18.3037 17.5879 17.8906 18.585 17.8906 19.6248C17.8906 20.6645 18.3037 21.6617 19.0389 22.3969C19.7741 23.1321 20.7712 23.5451 21.811 23.5451Z" fill="white" />
                    </svg>

                )
                break;
            case "Sass":
                return (
                    <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8239 0.146973C33.2859 0.146973 42.664 9.71258 42.664 21.4039C42.664 33.0952 33.2859 42.6608 21.8239 42.6608C10.3618 42.6608 0.983765 33.0952 0.983765 21.4039C0.983765 9.71258 10.3618 0.146973 21.8239 0.146973ZM17.6558 28.4452C17.9164 29.6409 17.9164 30.7038 17.6558 31.6338L17.5256 32.0323C17.5256 32.1652 17.3953 32.298 17.3953 32.298C17.1348 32.8295 16.8743 33.228 16.4836 33.7595C15.3113 35.088 13.6181 35.6194 12.8366 35.2209C12.0551 34.8223 12.4458 32.8295 13.8786 31.3681C15.4416 29.7738 17.5256 28.7109 17.5256 28.7109L17.6558 28.4452ZM34.8489 9.18116C33.9372 5.4612 27.8154 4.13264 21.9541 6.25833C18.5676 7.58689 14.7903 9.57973 12.0551 12.104C8.7988 15.1597 8.40805 17.8168 8.5383 18.8796C9.31981 22.7324 14.5298 25.3896 16.7441 27.2495C16.0928 27.5152 11.4038 29.9066 10.3618 32.4309C9.18956 35.088 10.4921 36.948 11.4038 37.0809C14.1391 37.878 17.0046 36.4166 18.4374 34.158C19.8701 31.8995 19.7399 29.1095 19.0886 27.6481C20.1018 27.3289 21.1789 27.2832 22.2146 27.5152C25.8616 27.9138 26.6431 30.3052 26.3826 31.2352C26.1221 32.1652 25.4709 32.6966 25.2104 32.9623C24.9499 33.0952 24.8196 33.228 24.9499 33.228C24.9499 33.3609 25.0801 33.3609 25.3406 33.3609C25.6011 33.3609 27.2944 32.5638 27.2944 30.7038C27.4246 28.4452 25.2104 25.921 21.4331 25.921C19.8701 25.921 18.8281 26.0538 18.1769 26.3195C18.1769 26.1867 18.0466 26.1867 18.0466 26.1867C15.7021 23.6624 11.4038 21.8024 11.5341 18.3482C11.5341 17.1525 12.0551 13.8311 19.8701 9.84544C26.2524 6.52405 31.4624 7.45404 32.3742 9.44687C33.6767 12.2368 29.6389 17.5511 22.9961 18.3482C20.3911 18.6139 19.0886 17.6839 18.8281 17.2854C18.4374 16.8868 18.4374 16.8868 18.3071 16.8868C18.0466 17.0196 18.1769 17.2854 18.3071 17.5511C18.5676 18.0825 19.3491 19.0125 20.7819 19.5439C21.9541 19.9425 24.9499 20.2082 28.5969 18.7468C32.6347 17.1525 35.7607 12.7683 34.8489 9.0483V9.18116Z" fill="white" />
                    </svg>

                )
                break;
            case "Spark ar":
                return (
                    <svg viewBox="0 0 31 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.537109 34.4927L30.9304 20.9483V34.4927L15.732 41.2624L0.537109 34.4927ZM15.7303 0.634277L0.537109 7.40393V20.9483L30.9304 7.40393L15.7303 0.634277ZM1.58003 21.4138L14.6891 27.2592L29.8892 20.4845L16.7767 14.6442L1.58003 21.4138Z" fill="white" />
                    </svg>

                )
                break;
            case "Wordpress":
                return (
                    <svg viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.384 0.63309C14.3511 0.617746 5.84898 5.84447 1.94709 14.1178L12.9185 14.1432V15.3141C9.54013 14.9174 9.83761 16.6293 10.3159 18.4463L17.5181 36.0601L22.8117 23.9513L20.3816 18.2766C19.4988 16.7567 19.4802 15.0705 15.8689 15.2293L15.9197 14.1503L32.0108 14.1885V15.3976C30.1264 15.5054 27.8579 14.9353 29.0604 18.7009L35.5685 35.3828L39.1261 25.644C40.2911 21.5615 39.1947 17.6383 37.8103 13.7911C37.0403 11.2102 37.3994 9.05485 40.8506 8.19983C35.5828 2.95277 29.3669 0.64326 23.384 0.63309ZM45.2688 16.0339L34.8365 42.569C37.7175 40.1342 40.6715 39.2479 44.2863 32.5107C46.6913 26.9069 46.4437 21.7157 45.2688 16.0339ZM0.842849 16.4637C-0.175394 24.2973 -0.0822434 26.5917 2.43835 32.9887C5.72397 39.1154 8.27185 40.4063 11.8881 42.8095L0.842849 16.4637ZM23.7913 26.4033L16.0602 44.6053C21.4869 46.1168 26.3426 45.9276 30.7877 44.2461L23.7913 26.4033Z" fill="white" />
                    </svg>

                )
                break;
            case "Adobe XD":
                return (
                    <svg viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.788574 0.634277V41.2624H42.2292V0.634277H0.788574ZM18.3958 29.7982L14.5643 22.0569L10.8676 29.7797H7.26473L12.5669 19.8767L7.44044 9.86288H11.18L14.8094 17.4749L18.4085 9.84439H21.9188L16.7881 19.5626L22.2217 29.7982H18.3958ZM34.8231 28.9852C33.2401 29.7243 31.5816 30.0569 29.9986 30.0569C25.9093 30.0753 22.9883 27.5996 22.9883 22.5742C23.1214 17.4261 26.6202 14.5535 31.5251 14.9437V9.86288H34.8796V26.9714C34.8865 29.0118 35.1162 28.8156 34.8231 28.9852ZM31.5251 17.8444V26.9898C28.2141 27.8322 26.3834 25.8567 26.3992 22.4263C26.4117 18.9083 28.7693 17.0825 31.5251 17.8444Z" fill="white" />
                    </svg>
                )
                break;
                break;
            case "Blender":
                return (
                    <svg viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6998 19.0694C21.7731 17.7225 22.4497 16.5333 23.4608 15.6934C24.5287 14.8272 25.8736 14.3575 27.2594 14.3666C28.7143 14.3666 30.0534 14.8724 31.0516 15.6934C32.064 16.5345 32.7329 17.7225 32.8127 19.0694C32.886 20.4478 32.3238 21.7367 31.3256 22.6876C30.2314 23.7123 28.7726 24.2783 27.2594 24.2653C25.7419 24.2792 24.2785 23.7133 23.1791 22.6876C22.1873 21.7355 21.6188 20.4478 21.6985 19.0694H21.6998ZM12.8496 21.7884C12.8548 22.3143 13.0297 23.3384 13.2831 24.1392C13.8383 25.8601 14.7714 27.4408 16.0167 28.7701C17.3504 30.2089 18.9777 31.357 20.7929 32.1399C22.7713 32.9923 24.9106 33.4268 27.0716 33.4149C29.2335 33.4213 31.3725 32.9808 33.3491 32.1222C35.1629 31.3306 36.7893 30.1784 38.1253 28.7386C39.3657 27.4015 40.296 25.8169 40.8524 24.0938C41.3884 22.4239 41.5348 20.6572 41.2808 18.9244C41.0413 17.2649 40.4473 15.6736 39.5377 14.2544C38.6995 12.9306 37.6234 11.7666 36.3617 10.8191L23.4724 1.10957C22.6286 0.472697 21.2084 0.479003 20.2835 1.10957C19.3458 1.75401 19.2377 2.81841 20.0674 3.49438L25.429 7.7709L9.06131 7.79108C7.70678 7.79108 6.41527 8.65748 6.15285 9.76223C5.89172 10.8783 6.80247 11.8053 8.20974 11.8103L16.4978 11.799L1.65188 22.9638C0.258753 24.008 -0.190187 25.7547 0.688397 26.8532C1.57856 27.9768 3.47594 27.9768 4.88836 26.8595L12.9551 20.3886C12.9551 20.3886 12.8355 21.2625 12.8484 21.7872L12.8496 21.7884ZM33.5832 24.7105C31.9161 26.3739 29.5903 27.3185 27.0729 27.3185C24.5529 27.3248 22.2208 26.3916 20.5601 24.737C19.7747 23.9616 19.1688 23.0295 18.7836 22.0041C18.4312 21.0404 18.292 20.0142 18.3754 18.9938C18.4588 17.9733 18.7629 16.9819 19.2673 16.0856C19.7709 15.2013 20.4414 14.4189 21.2431 13.7802C22.8588 12.4939 24.9157 11.7977 27.0729 11.7914C29.2224 11.7914 31.2806 12.4812 32.8937 13.7676C33.6991 14.4007 34.3703 15.1821 34.8696 16.0679C35.3725 16.9469 35.6812 17.9256 35.7687 18.9383C35.8621 19.9689 35.7228 21.007 35.3609 21.9789C34.9732 23.003 34.3676 23.9346 33.5845 24.7118L33.5832 24.7105Z" fill="white" />
                    </svg>
                )
                break;
                break;
            case "Bootstrap":
                return (
                    <svg viewBox="0 0 51 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.9558 0.634277C8.10256 0.634277 5.99286 3.18129 6.08866 5.94074C6.17821 8.59609 6.06159 12.0311 5.21395 14.833C4.36008 17.6413 2.92306 19.4214 0.573853 19.6509V22.2319C2.92306 22.4592 4.36216 24.2393 5.21187 27.0497C6.06159 29.8517 6.17821 33.2866 6.08658 35.9399C5.99286 38.7014 8.10256 41.2485 10.9558 41.2485H40.1792C43.0325 41.2485 45.1422 38.7014 45.0464 35.9399C44.9568 33.2866 45.0734 29.8517 45.9211 27.0497C46.7729 24.2393 48.2078 22.4613 50.557 22.2319V19.6509C48.2078 19.4214 46.7729 17.6413 45.9211 14.833C45.0734 12.0289 44.9568 8.59397 45.0464 5.94074C45.1422 3.17917 43.0304 0.634277 40.1792 0.634277H10.9558ZM34.4583 25.635C34.4583 29.4374 31.6779 31.7423 27.0649 31.7423H19.2113C18.9865 31.7423 18.7709 31.6512 18.612 31.4891C18.453 31.3269 18.3637 31.107 18.3637 30.8777V11.0029C18.3642 10.774 18.4538 10.5546 18.6127 10.3929C18.7716 10.2312 18.9869 10.1404 19.2113 10.1404H27.0212C30.8678 10.1404 33.394 12.2647 33.394 15.5298C33.394 17.8197 31.6946 19.8697 29.5308 20.2308V20.3498C32.4777 20.679 34.4603 22.7608 34.4603 25.635H34.4583ZM26.211 12.8786H21.7334V19.3322H25.505C28.4207 19.3322 30.0285 18.1341 30.0285 15.9928C30.0285 13.9875 28.6456 12.8786 26.211 12.8786ZM21.7334 21.892V29.002H26.3777C29.412 29.002 31.0219 27.7593 31.0219 25.4247C31.0219 23.088 29.3683 21.892 26.1819 21.892H21.7334Z" fill="white" />
                    </svg>
                )
                break;
                break;
            case "CSS":
                return (
                    <svg viewBox="0 0 39 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0071 0.120361H15.4853V2.41111H12.2978V4.70186H15.4853V6.99261H10.0071V0.120361Z" fill="white" />
                        <path d="M16.5798 0.120361H22.0602V2.11361H18.8727V2.51099H22.0602V7.09249H16.5798V5.00149H19.7673V4.60199H16.5798V0.120361Z" fill="white" />
                        <path d="M23.1566 0.120361H28.6327V2.11361H25.4452V2.51099H28.6327V7.09249H23.1566V5.00149H26.3441V4.60199H23.1566V0.120361Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.5463 51.1203L4.7903 47.0233L0.44043 10.144H38.6904L34.3427 47.0191L19.5463 51.1203ZM9.0403 26.838L9.44618 31.36H25.1223L24.5974 37.225L19.5527 38.5892H19.5484L14.5122 37.2292L14.1892 33.6231H9.64806L10.2813 40.7248L19.5463 43.2961L28.8262 40.7248L29.9567 28.0513L30.0672 26.838L30.8832 17.6813H8.22643L8.63868 22.2055H25.9277L25.5154 26.838H9.0403Z" fill="white" />
                    </svg>
                )
                break;
                break;
            case "Electron":
                return (
                    <svg viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7042 9.57376C15.7499 9.75677 15.4591 11.252 14.4134 11.0689C6.11898 9.60698 0.307801 12.7159 4.70716 20.4139C5.23295 21.2881 3.83808 22.0426 3.31238 21.1683C-1.92587 12.4653 4.86656 7.80697 14.7042 9.57376ZM35.6229 24.3354C43.0375 15.7363 39.7722 9.34136 30.8571 9.23677C29.7983 9.22365 29.7788 10.7439 30.8376 10.757C38.7289 10.725 40.6064 16.2616 34.3945 23.3559C33.7099 24.1454 34.9638 25.0856 35.6229 24.3354ZM27.8238 37.823C28.3656 36.9698 27.0164 36.1745 26.4483 37.0373C21.9624 43.7696 16.4793 41.6955 13.1608 33.5774C12.802 32.6103 11.2869 33.1159 11.6457 34.083C14.5815 42.5871 22.367 46.3337 27.8238 37.823ZM22.9101 22.6796C22.9101 21.0393 21.025 20.0085 19.5251 20.8287C18.025 21.6488 18.025 23.7104 19.5251 24.5305C21.025 25.3507 22.9101 24.3199 22.9101 22.6796ZM3.20288 29.5899C3.46426 22.8322 13.8434 14.2125 26.0831 11.2465C27.1341 11.0298 26.7936 9.54414 25.7425 9.76087C14.4373 12.1347 1.02543 21.6661 1.58919 30.0078C-0.370387 31.1294 -0.349975 33.8517 1.6493 34.9409C3.66864 36.0411 6.20633 34.6585 6.20633 32.4584C6.20633 30.8046 4.77255 29.6127 3.20288 29.5899ZM36.4419 34.8588C37.8849 35.7493 39.9721 35.3415 40.8144 33.7432C41.8513 31.7759 40.2336 29.4638 37.9096 29.5914C35.7277 29.7113 34.4431 31.8987 35.3594 33.6881C28.31 36.5968 15.2158 31.7298 7.51704 23.9932C6.81247 23.256 5.62329 24.2782 6.32777 25.0155C13.6299 32.6734 28.4672 38.8657 36.4419 34.8588ZM23.6903 3.49827C23.691 1.61729 21.7095 0.158532 19.7032 0.777294C17.4895 1.4602 16.8908 4.16519 18.6281 5.63478C20.0899 6.87099 22.2907 6.45952 23.2363 5.01626C28.7142 8.45091 32.1134 20.1889 28.4914 32.6122C28.1781 33.5738 29.7129 34.0236 30.0262 33.0619C33.3174 22.9792 31.537 8.04797 23.6903 3.49827Z" fill="white" />
                    </svg>
                )
                break;
                break;
            case "Emmet":
                return (
                    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.5364 20.6204C41.5364 31.9422 32.3582 41.1204 21.0364 41.1204C9.71454 41.1204 0.536377 31.9422 0.536377 20.6204C0.536377 9.29853 9.71454 0.120361 21.0364 0.120361C32.3582 0.120361 41.5364 9.29853 41.5364 20.6204ZM26.9404 17.7835L29.2234 20.0664L31.9631 9.10774L21.0044 11.8475L23.2223 14.0653L28.1146 12.9564L26.9404 17.7835ZM16.8297 12.891L5.87089 15.6309L25.4402 35.2L28.1797 24.2412L25.8968 21.958L23.9399 29.7857L19.5042 25.3499L20.8087 20.262L15.6555 21.5014L11.2198 17.0657L19.0476 15.1088L16.8297 12.891Z" fill="white" />
                    </svg>
                )
                break;
                break;
            case "Figma":
                return (
                    <svg viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.55885 0.634277C3.41788 0.634277 0.0875098 4.10849 0.0875098 8.36454C0.0875098 10.952 1.31948 13.2501 3.21312 14.653C2.23716 15.3842 1.44608 16.3339 0.903289 17.4259C0.360504 18.5179 0.0811115 19.722 0.0875098 20.9414C0.0875098 23.5306 1.31948 25.827 3.21312 27.2299C2.23716 27.9611 1.44608 28.9108 0.903289 30.0028C0.360504 31.0948 0.0811115 32.2989 0.0875098 33.5183C0.0875098 37.7744 3.41788 41.2486 7.55885 41.2486C11.6981 41.2486 15.0302 37.7744 15.0302 33.5183V26.9828C16.3389 28.074 17.9885 28.6721 19.6924 28.6734C23.8333 28.6717 27.1637 25.1975 27.1637 20.9414C27.1637 18.3523 25.9334 16.0559 24.0381 14.653C25.0141 13.9218 25.8052 12.9721 26.3479 11.8801C26.8907 10.788 27.1701 9.58401 27.1637 8.36454C27.1637 4.10849 23.8333 0.634277 19.6924 0.634277H7.55885ZM2.89497 8.36454C2.89497 5.67215 4.99676 3.5162 7.55885 3.5162H12.221V13.2129H7.55885C4.99676 13.2129 2.89497 11.0552 2.89497 8.36454ZM19.6924 13.2112H15.0302V3.51451H19.6924C22.2562 3.51451 24.3563 5.67215 24.3563 8.36454C24.3563 11.0552 22.2562 13.2112 19.6924 13.2112ZM2.89667 20.9414C2.89667 18.2507 4.99846 16.0931 7.56054 16.0931H12.2227V25.7898H7.55885C4.99507 25.7898 2.89497 23.6321 2.89497 20.9414H2.89667ZM15.0302 20.9414C15.0302 18.2507 17.132 16.0931 19.6941 16.0931C22.2578 16.0931 24.3579 18.249 24.3579 20.9414C24.3579 23.6321 22.2578 25.7898 19.6941 25.7898C17.132 25.7898 15.0319 23.6338 15.0319 20.9414H15.0302ZM2.89667 33.5183C2.89667 30.8276 4.99846 28.6717 7.56054 28.6717H12.2227V33.5183C12.2227 36.2107 10.1243 38.3667 7.56054 38.3667C4.99846 38.3667 2.89667 36.2107 2.89667 33.5183Z" fill="white" />
                    </svg>
                )
                break;
                break;
            case "Firebase":
                return (
                    <svg viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.48345 28.3984L5.67183 1.44912C5.70257 1.24954 5.7953 1.06469 5.93689 0.920711C6.07848 0.776737 6.26176 0.680934 6.4608 0.646861C6.65984 0.612787 6.86455 0.642168 7.04597 0.730846C7.22738 0.819524 7.37632 0.963009 7.4717 1.14099L11.9767 9.59637L1.48345 28.3984ZM31.2356 34.937L27.247 10.1361C27.2169 9.96255 27.14 9.80051 27.0244 9.66758C26.9088 9.53464 26.759 9.43589 26.5913 9.38203C26.4236 9.32817 26.2443 9.32125 26.073 9.36204C25.9016 9.40282 25.7447 9.48974 25.6192 9.61337L0.465576 34.937L14.3843 42.7804C15.2577 43.2691 16.3223 43.2691 17.1957 42.7804L31.2356 34.937ZM19.9242 13.2939L16.7006 7.12499C16.6191 6.97014 16.4968 6.84048 16.347 6.75003C16.1972 6.65958 16.0256 6.61178 15.8506 6.61178C15.6756 6.61178 15.5039 6.65958 15.3541 6.75003C15.2043 6.84048 15.0821 6.97014 15.0006 7.12499L0.845951 32.4911L19.9242 13.2939Z" fill="white" />
                    </svg>
                )
                break;
            default:
                return (
                    <svg viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.31549 2.09968L10.4705 9.50013L2.31549 16.73" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                )
                break;
        }
    }

    const openLink = (e) =>{
        e.preventDefault();
        if (props.link)
            window.open(props.link)
        else
        console.log("nothing to open")
    }

    return (
        <div className="Icon" onClick={openLink} tooltip={props.tooltip}>
            {renderIcon(props.icon)}
        </div>
    )
}

Icon.defaultProps = {
    icon: "HTML",
    link: "",
    tooltip:"",
}

export default Icon
