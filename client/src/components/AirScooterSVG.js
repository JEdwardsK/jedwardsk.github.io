import * as React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function AirScooterSVG({ colourScheme, size }) {
  const { 
    primary, secondary, boots, 
    skin, tattoos, neckShadow, 
    collarShadow,
  } = colourScheme

  const airTransition = (duration = .5, delay = 0) => {
    return {
      ease: 'linear',
      duration: duration,
      timeConstant: 0,
      loop: Infinity,
      delay: delay,
    }
  }


  // const fullMovement = {
  //   loop: Infinity,
  // }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      // {...props}
    >
      <defs>
        <path
          d="M341.63 157.1l11.02-20.08 6.42-11.25H320.1c-5.06-1.47-8.22-2.39-9.49-2.75-2.67-.78-5.54.04-7.41 2.1-.92 1.02-1.29 1.44-2.38 2.64a5.14 5.14 0 00-.89 5.5c1.81 4.14 6.33 14.5 13.57 31.07l28.13-7.23z"
          id="aang_collar_back"
        />
        <path
          d="M322.78 151.68L322.78 276.48L363.34 276.48L367.05 262.72L363.34 248.68C376.81 247.68 385.23 247.05 388.6 246.8C392.02 246.55 395.4 245.95 398.7 245.02C403.89 243.57 414.13 240.69 419.22 239.26C422.82 238.25 426.17 236.54 429.09 234.21C431.73 232.11 435.43 229.17 438.12 227.03C440.64 225.02 441.67 221.67 440.71 218.6C440.29 217.26 440.79 218.84 440.41 217.63C439.24 213.88 437.26 210.43 434.62 207.53C429.54 201.94 420.99 192.53 416.57 187.68C411.7 182.31 406.2 177.55 400.19 173.49C396.56 171.04 392.05 167.99 387.75 165.09C383.95 162.52 379.93 160.31 375.72 158.48C371.5 156.64 366.12 154.3 362.14 152.57C357.19 150.41 351.8 149.5 346.42 149.9C343.27 150.14 335.39 150.73 322.78 151.68Z"
          id="aang_body_right"
        />
        <path
          d="M339.65 151.7L339.65 276.49L297.51 276.49L293.65 262.74L297.51 248.7C283.4 247.69 274.58 247.06 271.05 246.81C267.63 246.56 264.24 245.99 260.93 245.09C255.5 243.62 244.56 240.67 239.23 239.23C235.62 238.25 232.24 236.59 229.28 234.32C226.51 232.2 222.5 229.12 219.68 226.97C217.14 225.02 216.1 221.68 217.09 218.63C217.52 217.3 217.02 218.84 217.42 217.63C218.63 213.89 220.66 210.48 223.35 207.63C228.64 202.03 237.7 192.44 242.31 187.55C247.29 182.29 252.88 177.63 258.96 173.67C262.78 171.19 267.79 167.93 272.29 165.01C276.13 162.51 280.19 160.36 284.42 158.59C288.85 156.73 294.82 154.23 299 152.48C303.98 150.4 309.38 149.51 314.77 149.9C318.08 150.14 326.38 150.74 339.65 151.7Z"
          id="aang_body_left"
        />
        <path
          d="M339.27 284.71L338.05 234.82L293.03 234.82L293.03 255.3L293.03 267.32L293.03 277.71L339.27 284.71Z"
          id="aang_belly_left"
        />
        <path
          d="M322.49 284.31L323.71 234.41L368.73 234.41L368.73 256.2L368.73 277.31L322.49 284.31Z"
          id="aang_belly_right"
        />
        <path
          d="M320.85 215.96a7.942 7.942 0 00-6.7.38c-1.31.7-2.07 1.1-3.4 1.81a15.47 15.47 0 00-5.23 4.62c-.85 1.21-3 4.24-6.44 9.09 3.5 5.23 5.68 8.49 6.55 9.8a10.62 10.62 0 005.29 4.09c1.3.45 1.18.41 2.31.8 2.73.95 5.67 1.07 8.46.35 1.78-.47 3.52-.92 5.47-1.42a4.59 4.59 0 003.42-4.43v-17.76c0-2.08-1.26-3.95-3.19-4.72-2-.8-4.6-1.83-6.54-2.61z"
          id="aang_hand_left"
        />
        <path
          d="M322.99 235.27l-7.6 3.89v-3.47h-17.28v-7.13h17.28v-4.96l7.6 3.89 7.59 3.89-7.59 3.89z"
          id="aang_hand_tat_left"
        />
        <path
          d="M249.1 237.34l10.79 2.47 13.65 1.3 19.6 1.44c1.84-.27 2.98-.44 3.44-.51 1.65-.24 3.33-.14 4.94.3.81.22 2.84.77 6.07 1.66-1.09-2.81-1.78-4.56-2.05-5.26a17.1 17.1 0 01-.12-12.16c.29-.79 1.01-2.76 2.17-5.91-3.46 2.35-5.62 3.83-6.49 4.42a5.686 5.686 0 01-4.41.86c-3.6-.77-8.02-1.71-10.62-2.26l-14.53-3.97c-4.49-1.49-13.98-4.66-19.27-6.42a6.213 6.213 0 00-5.8 1.01c-1.8 1.41-6.29 4.94-13.49 10.6-.85.66-1.38 1.08-1.6 1.25a2.984 2.984 0 00-.05 4.65c.53.43-.53-.43.06.05 1.69 1.38 3.65 2.41 5.75 3.02 1.6.46 5.58 1.62 11.96 3.46z"
          id="aang_arm_left"
        />
        <path
          d="M262.15 337.46l3.1 22.73 11.08 3.1 22.27-1.72 15.2 2.75 2.06 4.82-2.06 7.92-4.82 15.15-10.38 7.58v6.63l6.4 6.78 12.43 2.83h16.96l7.24-5.09-3.29-13v-19.78l4.53-11.87v-10.17l-8.48-5.65-15.26-5.65-11.87-9.04-30.93-9.61-14.18 11.29z"
          id="aang_foot_left"
        />
        <path
          d="M290.12 269.71l-23.82 18.56-23.38 13.81-28.11 20.41-6 24.73 11.61 22.5 13.36 1.64 9.14 8.06 12.79-6.17h10.59l7.94-10.15 6.68-15.88 9.2-9.26 15.88-3.32h25.07v-64.93h-40.95z"
          id="aang_leg_left"
        />
        <path
          d="M320.31 333.62l14.31 1.26 10.94 12.9v6.8l3.74 9.52 7.14 13.25 10.88 3.74 10.87 8.16 13.26-4.08 18.02-6.46 10.54-5.77 5.51-8.84 5.87-13.26v-10.85l-5.87-14.61-21.76-22.78-18.69-19.04-12.58-15.63-45.55 1.78-6.63 63.91z"
          id="aang_leg_right"
        />
        <path
          d="M317.81 105.25h28.59c1.23 21.18 2 34.43 2.31 39.72.5 8.62-6.35 15.88-14.99 15.88h-5.92c-8.5 0-15.12-7.36-14.22-15.81.56-5.31 1.97-18.57 4.23-39.79z"
          id="aang_neck"
        />
        <path
          d="M293.03 276.49C305.06 279.28 312.58 281.03 315.59 281.72C323.69 283.6 332.09 283.73 340.23 282.11C342.5 281.66 340.51 282.05 343.67 281.42C348.9 280.38 353.96 278.61 358.7 276.15C360.81 275.05 366.09 272.31 374.53 267.93L368.73 256.2C354.7 261.75 345.94 265.21 342.43 266.6C332.98 270.33 322.58 270.87 312.8 268.14C310.16 267.41 303.57 265.57 293.03 262.62L293.03 276.49Z"
          id="aang_belt"
        />
        <path
          d="M227.98 295.74l-1.3 8.65 6.05 2.4 13.83-5.43 9.08 1.73h28.53l11.24-1.73 10.81 5.43 12.97 11.43 18.59 20.75 18.16 20.32 29.88-20.32-8.27-18.59-18.16-13.59-33.28-9.32-16.86-8.59-8.22-8.27-5.62-10.9h-7.35l-13.83 5.28-18.59-1.3-12.95 4.88-11.93 10.31-2.78 6.86z"
          id="aang_foot_right"
        />
        <path
          d="M354.82 366.44l37.45 4.66 16.42-40.85-19.36-10.94-15.15 3.79-12.63 3.07-3.79 4.08-5.05 11.78-6.31 5.9 8.42 18.51z"
          id="aang_knee_right"
        />
        <path
          d="M310.33 161.2l16.2 7.38-3.06-9.7c-1.15-3.63-.92-7.57.65-11.04.32-.72 1.13-2.5 2.41-5.35-13.79-6.06-22.42-9.85-25.87-11.36-.76-.34-1.56.41-1.26 1.2 1.45 3.85 5.1 13.47 10.93 28.87z"
          id="aang_collar_left"
        />
        <path
          d="M354.74 143.04c-3.08 11.63-4.99 18.89-5.76 21.8a5.03 5.03 0 01-4.86 3.74h-17.59c-.94-1.8-1.53-2.92-1.76-3.37a7.44 7.44 0 01.83-8.15c1.8-2.19 5.25-6.39 7.34-8.94a9.459 9.459 0 014.03-2.88c1.16-.44.41-.16 1.11-.42 3.11-1.17 5.91-3.02 8.2-5.42 2.56-2.68 8.83-9.25 11.91-12.48.24-.25.65-.02.57.32-.54 2.1-1.88 7.37-4.02 15.8z"
          id="aang_collar_right"
        />
        <path
          d="M346.24 116.1c.43 4.24.7 6.89.8 7.94.12 1.13-.31 2.24-1.15 3-1.32 1.21-2.84 2.58-3.88 3.52a8.802 8.802 0 01-6.44 2.27c-2.33-.15-5.39-.33-7.67-.47-2.61-.16-5.13-1-7.31-2.44-.64-.41-2.21-1.45-4.73-3.1v-6.14l30.38-4.58z"
          id="aang_neck_shadow"
        />
        <path
          d="M334.34 14.22l1.85.18 1.83.24 1.8.3 1.78.38 1.75.43 1.72.5 1.69.56 1.66.61 1.63.68 1.6.73 1.56.79 1.52.83 1.48.9 1.45.94 1.4.99 1.36 1.04 1.31 1.09 1.27 1.13 1.22 1.18 1.17 1.22 1.12 1.26 1.07 1.3 1.02 1.34.96 1.37.91 1.41.84 1.45.79 1.48.73 1.51.67 1.54.6 1.57.53 1.6.47 1.62.4 1.65.34 1.67.26 1.69.18 1.72.12 1.73.04 1.75-.04 1.75-.12 1.74-.18 1.71-.26 1.7-.34 1.67-.4 1.65-.47 1.62-.4 1.19-1.03 4.96.93-1.42 1.65-1.25.15-.11.15-.1.16-.09.17-.09.16-.08.17-.06.18-.07.17-.05.18-.04.18-.04.18-.03.19-.02.18-.01h.19l.18.01 1.18.08.18.01.17.03.17.03.16.04.17.06.16.06.15.07.15.07.15.09.15.09.13.11.14.11.12.11.12.13.12.13.36.44.07.09.07.09.07.09.07.09.06.1.06.1.07.09.06.1.05.1.06.11.05.1.05.1.05.11.05.1.05.11.41.98.11.28.11.28.11.27.1.28.09.28.1.29.09.28.08.29.08.28.08.29.07.29.07.29.06.29.06.29.06.29.36 1.96.24 5.34.01.2v.2l-.01.2-.01.21-.02.2-.02.2-.03.19-.03.2-.04.2-.05.2-.05.19-.06.19-.06.19-.07.19-.07.19-.03.08-.07.15-.06.15-.07.14-.08.14-.08.14-.08.14-.09.13-.09.14-.09.13-.1.12-.1.13-.11.12-.1.12-.12.12-.11.11-2.94 2.8-2.31 2.12-.28.26-.29.26-.29.25-.29.25-.29.25-.3.24-.3.24-.3.24-.31.23-.3.24-.31.22-.32.23-.31.22-.31.22-.22.15-.21.13-.24.14-.24.12-.25.12-.25.1-.26.09-.26.08-.27.07-.26.05-.27.05-.28.03-.27.02h-.27l-.28-.01-.27-.01-.09-.01-.17-.03-.16-.03-.16-.05-.15-.07-.15-.07-.13-.09-.13-.1-.12-.11-.12-.11-.1-.13-.09-.14-.08-.14-.06-.15-.06-.16-.04-.17-.06-.28-.39 1.89-.05.21-.05.21-.05.21-.05.21-.06.21-.06.21-.06.2-.06.21-.06.2-.07.21-.07.2-.08.2-.07.2-.08.2-.08.2-.08.2-.09.19-.09.2-.09.19-.09.2-.09.19-.1.19-.1.19-.1.19-.11.19-.1.18-.11.19-.11.18-.11.18-.12.18-.12.18-.12.18-.12.18-.12.17-.13.18-.13.17-.13.17-.13.17-.14.17-.14.17-2.81 3.36-.21.24-.21.25-.22.25-.21.24-.21.25-.22.24-.22.24-.22.24-.22.24-.22.23-.22.24-.23.23-.22.24-.23.23-.23.23-.23.23-.23.23-.24.22-.23.23-.23.22-.24.22-.24.22-.24.22-.24.22-.24.22-.24.21-.25.22-.24.21-.25.21-.25.21-.25.21-.25.2-.25.21-.25.2-.26.2-.25.2-.26.2-.26.2-.26.2-.26.19-10.62 7.9-.14.11-.14.1-.14.09-.15.1-.14.09-.15.09-.15.09-.15.08-.15.08-.15.08-.16.07-.15.08-.16.07-.16.06-.16.07-.16.06-.16.06-.16.05-.16.06-.17.05-.16.04-.17.05-.16.04-.17.04-.17.04-.17.03-.17.03-.17.02-.17.03-.17.02-.17.02-.17.01-.17.02h-.17l-.17.01h-.52l-.18-.01-.17-.01-6.46-.4-.19-.01-.18-.02-.19-.01-.18-.02-.19-.02-.18-.03-.18-.03-.19-.02-.18-.04-.18-.03-.18-.03-.18-.04-.19-.04-.18-.05-.17-.04-.18-.05-.18-.05-.18-.05-.18-.05-.17-.06-.18-.05-.17-.07-.18-.06-.17-.06-.17-.07-.17-.07-.17-.07-.17-.07-.17-.08-.17-.07-.17-.08-.16-.09-.17-.08-.16-.09-.17-.08-.16-.09-.16-.1-.16-.09-.16-.1-.16-.1-13.15-8.31-.21-.14-.22-.14-.21-.14-.21-.14-.21-.14-.22-.14-.21-.15-.2-.15-.21-.14-.21-.15-.21-.15-.2-.15-.2-.16-.21-.15-.2-.16-.2-.15-.2-.16-.2-.16-.2-.16-.2-.16-.19-.16-.2-.17-.19-.16-.19-.17-.2-.16-.19-.17-.19-.17-.19-.17-.18-.17-.19-.18-.19-.17-.18-.18-.19-.17-.18-.18-.18-.18-.18-.18-.18-.18-.18-.19-.18-.18-.17-.18-4.89-5.17-.13-.14-.13-.14-.12-.14-.13-.15-.12-.15-.12-.14-.11-.15-.12-.15-.11-.16-.11-.15-.11-.16-.1-.16-.1-.15-.1-.16-.1-.17-.1-.16-.09-.16-.09-.17-.09-.17-.08-.17-.08-.17-.08-.17-.08-.17-.08-.17-.07-.18-.07-.17-.07-.18-.06-.18-.06-.17-.06-.18-.06-.18-.06-.19-.05-.18-.05-.18-.04-.19-.05-.18-.04-.19-.04-.18-.03-.19-.03-.19-.07.03-.15.05-.17.04-.17.02-.08.01-.28.02h-.55l-.27-.02-.27-.03-.27-.05-.27-.05-.26-.07-.27-.08-.25-.09-.26-.1-.24-.12-.25-.12-.24-.14-.21-.13-.21-.15-.32-.22-.31-.22-.31-.22-.31-.23-.31-.23-.3-.24-.31-.24-.3-.24-.29-.24-.3-.25-.29-.25-.29-.25-.29-.26-.28-.25-2.31-2.13-2.94-2.8-.11-.11-.11-.12-.11-.12-.11-.12-.1-.12-.09-.13-.1-.13-.09-.13-.09-.14-.08-.14-.08-.14-.07-.14-.07-.14-.07-.15-.06-.15-.04-.08-.07-.18-.07-.19-.06-.2-.06-.19-.05-.19-.04-.2-.04-.2-.04-.19-.03-.2-.02-.2-.02-.2-.01-.2V87.47l.25-5.34.36-1.96.05-.29.06-.29.06-.29.07-.29.08-.29.07-.29.08-.28.09-.29.09-.28.09-.28.1-.29.1-.27.1-.28.11-.28.11-.28.41-.98.05-.11.05-.1.05-.11.05-.1.05-.1.06-.1.06-.1.06-.1.06-.1.06-.1.07-.09.06-.1.07-.09.07-.09.08-.09.36-.44.11-.13.12-.13.13-.11.13-.11.14-.1.14-.1.15-.08.15-.08.16-.07.16-.06.16-.05.17-.05.16-.03.18-.03.17-.01 1.18-.08.19-.01.18.01.19.01.18.01.18.03.18.04.18.04.18.06.17.06.17.07.17.07.16.09.16.09.16.1.15.11 1.64 1.25.34.51-1.17-7.01-.14-.49-.4-1.65-.33-1.67-.26-1.7-.19-1.71-.11-1.74-.04-1.75.04-1.75.11-1.73.19-1.72.26-1.69.33-1.67.4-1.65.47-1.62.54-1.6.6-1.57.66-1.54.73-1.51.79-1.48.85-1.45.9-1.41.96-1.37 1.02-1.34 1.07-1.3 1.12-1.26 1.17-1.22 1.22-1.18 1.27-1.13 1.32-1.09 1.36-1.04 1.4-.99 1.44-.94 1.48-.9 1.53-.83 1.56-.79 1.59-.73 1.63-.68 1.66-.61 1.69-.56 1.73-.5 1.75-.43 1.78-.38 1.8-.3 1.82-.24 1.85-.18 1.87-.1 1.89-.04 1.89.04 1.87.1zm-46.83 86.75l-.13-.09.02.02.11.07zm86.25-.71l.02-.02-.12.09.1-.07z"
          id="aang_head"
        />
        <path
          d="M330.89 14.08c.95.05 1.54.08 1.78.09 3.56.19 7.1.67 10.58 1.42l1.02 30.56 15.79 3.5-29.03 24.52-29.54-24.52 16.81-3.5-.08-30.55c.35-.08.58-.13.66-.15 3.79-.91 7.68-1.37 11.57-1.37h.44z"
          id="aang_head_tattoo"
        />
        <path
          d="M340.32 215.96c2.18-.87 4.63-.73 6.7.38l3.39 1.81c2.08 1.12 3.87 2.7 5.23 4.62.86 1.21 3.01 4.24 6.44 9.09-3.49 5.23-5.68 8.49-6.55 9.8-1.27 1.9-3.13 3.33-5.29 4.09-1.3.45-1.18.41-2.31.8-2.72.95-5.67 1.07-8.46.35-1.78-.47-3.52-.92-5.47-1.42a4.59 4.59 0 01-3.42-4.43v-17.76c0-2.08 1.27-3.95 3.2-4.72 1.99-.8 4.59-1.83 6.54-2.61z"
          id="aang_hand_right"
        />
        <path
          d="M363.06 235.69h-17.29v3.47l-7.59-3.89-7.6-3.89 7.6-3.89 7.59-3.89v4.96h17.29v7.13z"
          id="aang_hand_tat_right"
        />
        <path
          d="M412.06 237.34l-10.79 2.47-13.65 1.3-19.6 1.44c-1.83-.27-2.98-.44-3.44-.51-1.65-.24-3.33-.14-4.94.3-.81.22-2.83.77-6.07 1.66 1.09-2.81 1.78-4.56 2.05-5.26 1.53-3.9 1.57-8.23.13-12.16-.29-.79-1.02-2.76-2.18-5.91 3.46 2.35 5.63 3.83 6.49 4.42 1.29.88 2.88 1.19 4.41.86 3.6-.77 8.02-1.71 10.62-2.26l14.54-3.97c4.48-1.49 13.97-4.66 19.26-6.42 1.98-.66 4.16-.28 5.8 1.01 1.8 1.41 6.3 4.94 13.49 10.6.85.66 1.39 1.08 1.6 1.25 1.5 1.18 1.52 3.44.05 4.65-.53.43.53-.43-.05.05-1.7 1.38-3.66 2.41-5.76 3.02-1.6.46-5.58 1.62-11.96 3.46z"
          id="aang_arm_right"
        />
        <path
          d="M449.36 491.3c0 69.86-56.72 126.57-126.58 126.57S196.2 561.16 196.2 491.3c0-69.86 56.72-126.58 126.58-126.58s126.58 56.72 126.58 126.58z"
          id="aang_air_scooter"
        />
        <path
          d="M259.3 516.34c57.49 17.88 120.14 5.04 165.96-34.02 2.4-2.04-8.59 7.33 7.66-6.53 1.66-1.41.86-4.13-1.31-4.41-29.05-3.8-68.53-8.96-87.07-11.38a197.642 197.642 0 00-111.13 17.8c-7.7 3.7-17.03 8.18-34.52 16.57-1.43.69-1.28 2.78.24 3.25 30.51 9.49 47.29 14.71 60.17 18.72z"
          id="air_rotate_1"
        />
        <path
          d="M251.53 474.95c36.01 48.25 94.23 74.69 154.26 70.03 3.14-.25-11.25.87 10.04-.78 2.18-.17 3.12-2.84 1.54-4.34-21.28-20.15-50.19-47.53-63.77-60.39a197.646 197.646 0 00-100.36-50.92c-8.41-1.53-18.58-3.39-37.66-6.88-1.57-.29-2.68 1.5-1.72 2.77 19.1 25.61 29.61 39.69 37.67 50.51z"
          id="air_rotate_2"
        />
        <path
          d="M318.43 549.56c42.03-43.1 59.03-104.75 45.04-163.31-.74-3.06 2.62 10.98-2.34-9.79-.51-2.12-3.3-2.64-4.53-.84-16.58 24.17-39.1 57-49.67 72.42a197.563 197.563 0 00-34.59 107.1c-.21 8.54-.45 18.88-.91 38.28-.04 1.59 1.9 2.4 3.01 1.26 22.3-22.87 34.57-35.45 43.99-45.12z"
          id="air_rotate_3"
        />
        <path
          d="M351.17 430.18c-59.16 11.2-108.44 51.94-130.57 107.94-1.15 2.93 4.15-10.5-3.7 9.36-.8 2.03 1.19 4.06 3.23 3.29 27.44-10.29 64.72-24.27 82.23-30.84a197.647 197.647 0 0089.76-67.88c5.07-6.89 11.2-15.22 22.7-30.84.94-1.28-.18-3.05-1.74-2.76-31.39 5.95-48.65 9.22-61.91 11.73z"
          id="air_rotate_4"
        />
        <path
          d="M265.42 444.01c4.96 60 40.33 113.27 93.7 141.13 2.8 1.46-10-5.22 8.93 4.66 1.94 1.01 4.15-.75 3.6-2.87-7.36-28.36-17.37-66.9-22.07-85a197.634 197.634 0 00-58.13-96.36c-6.32-5.76-13.96-12.73-28.29-25.8-1.18-1.07-3.06-.14-2.93 1.44 2.63 31.84 4.08 49.35 5.19 62.8z"
          id="air_rotate_5"
        />
        <path
          d="M308.07 233.78l52.01-3.96 62.78-5.37 2.94-.85c2.12 2.45 3.44 3.97 3.97 4.59a2.37 2.37 0 01-.69 3.66c-1.13.59-3.94 2.07-8.44 4.43l-12.97 3.46-30.5 3.06-11.7.27-4.62-.27-2.81.27-6.45 3.01-4.05 1.65-6.61.2-7.03-.9-2.94-1.28h-1.92l-4.22 1.28-3.7.9-4.74.63-3.71-1.21-4.6-1.6-3.58-1.76-4.09-.92h-3.58l-4.48.92-30.74-2.07-15.79-2.76-13.65-4.48-1.92-4.51 77.83 3.61z"
          id="aang_arm_shadow"
        />
      </defs>
      <g id="aang_full_svg">
        <motion.g

          animate={{
            // translateZ: [0, 2, 4, 2, 0],
            scale: [0, 1],
            rotate: [0, 720],
          }}
          transition={{
            // repeat: Infinity,
            duration: 4,
            // delay: 4

          }}
        >
          <g id="aang_all_body">
            <use xlinkHref="#aang_collar_back" fill={collarShadow} />
            <use xlinkHref="#aang_body_right" fill={primary} />
            <use xlinkHref="#aang_body_left" fill={primary} />
            <use xlinkHref="#aang_belly_left" fill={secondary} />
            <use xlinkHref="#aang_belly_right" fill={secondary} />
            <use xlinkHref="#aang_foot_left" fill={boots} />
            <use xlinkHref="#aang_leg_left" fill={secondary} />
            <use xlinkHref="#aang_leg_right" fill={secondary} />
            <use xlinkHref="#aang_belt" fill={primary} />
            <use xlinkHref="#aang_foot_right" fill={boots} />
            <use xlinkHref="#aang_knee_right" fill={secondary} />
            <g id="group_head">
              <use xlinkHref="#aang_neck" fill={skin} />
              <use xlinkHref="#aang_collar_left" fill={secondary} />
              <use xlinkHref="#aang_collar_right" fill={secondary} />
              <use xlinkHref="#aang_neck_shadow" fill={neckShadow} />
              <use xlinkHref="#aang_head" fill={skin} />
              <use 
                xlinkHref="#aang_head_tattoo" 
                fill={tattoos}
                className="aang_avatar_state" 
              />
            </g>
            <use xlinkHref="#aang_arm_shadow" fill="#144a5f" fillOpacity={0.23}/>
            <g id="group_arm_left">
              <use xlinkHref="#aang_hand_left" fill={skin} />
              <use 
                xlinkHref="#aang_hand_tat_left" 
                fill={tattoos}
                className="aang_avatar_state" 
              />
              <use xlinkHref="#aang_arm_left" fill={secondary} />
            </g>
            <g id="group_arm_right">
              <use xlinkHref="#aang_hand_right" fill={skin} />
              <use 
                xlinkHref="#aang_hand_tat_right" 
                fill={tattoos}
                className="aang_avatar_state" 
              />
              <use xlinkHref="#aang_arm_right" fill={secondary} />
            </g>  
            <use xlinkHref="#aang_air_scooter" fill="#a1e4ff" fillOpacity={0.51} className="scooter_style"/>

          </g>
          <g id="aang_all_air_scooter">
            <g id="group_air_1">
              <motion.g 
                animate={{
                  rotate: 360,
                }}
                // transition={airTransition()}
              >
                <filter
                  id="prefix__shadow10191219"
                  x={140.9}
                  y={401.34}
                  width={359.91}
                  height={189.92}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.61} />
                  <feOffset dx={10} dy={10} result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={0.78} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={16} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M259.3 516.34c57.49 17.88 120.14 5.04 165.96-34.02 2.4-2.04-8.59 7.33 7.66-6.53 1.66-1.41.86-4.13-1.31-4.41-29.05-3.8-68.53-8.96-87.07-11.38a197.642 197.642 0 00-111.13 17.8c-7.7 3.7-17.03 8.18-34.52 16.57-1.43.69-1.28 2.78.24 3.25 30.51 9.49 47.29 14.71 60.17 18.72z"
                  id="air_rotate_use_1"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow10191219)"
                />
                <g>
                  <filter
                    id="prefix__shadow5325172"
                    x={154.9}
                    y={415.34}
                    width={331.91}
                    height={161.92}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset dx={10} dy={10} result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={4} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M259.3 516.34c57.49 17.88 120.14 5.04 165.96-34.02 2.4-2.04-8.59 7.33 7.66-6.53 1.66-1.41.86-4.13-1.31-4.41-29.05-3.8-68.53-8.96-87.07-11.38a197.642 197.642 0 00-111.13 17.8c-7.7 3.7-17.03 8.18-34.52 16.57-1.43.69-1.28 2.78.24 3.25 30.51 9.49 47.29 14.71 60.17 18.72z"
                    id="air_rotate_use_2"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow5325172)"
                  />
                </g>
              </motion.g>
            </g>
            <g id="group_air_2">
              <motion.g
              // animate={{rotateX: -360}}
              // transition={airTransition(1)}
              >
                <filter
                  id="prefix__shadow6219504"
                  x={156.5}
                  y={364.64}
                  width={328.65}
                  height={247.87}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.61} />
                  <feOffset dx={10} dy={10} result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={0.78} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={16} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M251.53 474.95c36.01 48.25 94.23 74.69 154.26 70.03 3.14-.25-11.25.87 10.04-.78 2.18-.17 3.12-2.84 1.54-4.34-21.28-20.15-50.19-47.53-63.77-60.39a197.646 197.646 0 00-100.36-50.92c-8.41-1.53-18.58-3.39-37.66-6.88-1.57-.29-2.68 1.5-1.72 2.77 19.1 25.61 29.61 39.69 37.67 50.51z"
                  id="air_rotate_use_3"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow6219504)"
                />
                <g>
                  <filter
                    id="prefix__shadow6461550"
                    x={170.5}
                    y={378.64}
                    width={300.65}
                    height={219.87}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset dx={10} dy={10} result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={4} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M251.53 474.95c36.01 48.25 94.23 74.69 154.26 70.03 3.14-.25-11.25.87 10.04-.78 2.18-.17 3.12-2.84 1.54-4.34-21.28-20.15-50.19-47.53-63.77-60.39a197.646 197.646 0 00-100.36-50.92c-8.41-1.53-18.58-3.39-37.66-6.88-1.57-.29-2.68 1.5-1.72 2.77 19.1 25.61 29.61 39.69 37.67 50.51z"
                    id="air_rotate_use_4"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow6461550)"
                  />
                </g>
              </motion.g>
            </g>
            <g id="group_air_3">
              <motion.g
                // animate={{ rotateY: 360 }}
                // transition={airTransition(1)}
              >
                <filter
                  id="prefix__shadow5465067"
                  x={214.43}
                  y={317.53}
                  width={220.84}
                  height={344.69}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.61} />
                  <feOffset dx={10} dy={10} result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={0.78} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={16} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M318.43 549.56c42.03-43.1 59.03-104.75 45.04-163.31-.74-3.06 2.62 10.98-2.34-9.79-.51-2.12-3.3-2.64-4.53-.84-16.58 24.17-39.1 57-49.67 72.42a197.563 197.563 0 00-34.59 107.1c-.21 8.54-.45 18.88-.91 38.28-.04 1.59 1.9 2.4 3.01 1.26 22.3-22.87 34.57-35.45 43.99-45.12z"
                  id="air_rotate_use_5"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow5465067)"
                />
                <g>
                  <filter
                    id="prefix__shadow4687059"
                    x={228.43}
                    y={331.53}
                    width={192.84}
                    height={316.69}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset dx={10} dy={10} result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={4} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M318.43 549.56c42.03-43.1 59.03-104.75 45.04-163.31-.74-3.06 2.62 10.98-2.34-9.79-.51-2.12-3.3-2.64-4.53-.84-16.58 24.17-39.1 57-49.67 72.42a197.563 197.563 0 00-34.59 107.1c-.21 8.54-.45 18.88-.91 38.28-.04 1.59 1.9 2.4 3.01 1.26 22.3-22.87 34.57-35.45 43.99-45.12z"
                    id="prefix__d3jkP5w666"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow4687059)"
                  />
                </g>
              </ motion.g>
            </g>
            <g id="group_air_4">
              <motion.g
                // animate={{ rotateZ: -360 }}
                // transition={airTransition(1)}
              >
                <filter
                  id="prefix__shadow1335898"
                  x={159.72}
                  y={361.42}
                  width={322.44}
                  height={256.52}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.61} />
                  <feOffset dx={10} dy={10} result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={0.78} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={16} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M351.17 430.18c-59.16 11.2-108.44 51.94-130.57 107.94-1.15 2.93 4.15-10.5-3.7 9.36-.8 2.03 1.19 4.06 3.23 3.29 27.44-10.29 64.72-24.27 82.23-30.84a197.647 197.647 0 0089.76-67.88c5.07-6.89 11.2-15.22 22.7-30.84.94-1.28-.18-3.05-1.74-2.76-31.39 5.95-48.65 9.22-61.91 11.73z"
                  id="prefix__a4wocMrwi"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow1335898)"
                />
                <g>
                  <filter
                    id="prefix__shadow6695390"
                    x={173.72}
                    y={375.42}
                    width={294.44}
                    height={228.52}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset dx={10} dy={10} result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={4} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M351.17 430.18c-59.16 11.2-108.44 51.94-130.57 107.94-1.15 2.93 4.15-10.5-3.7 9.36-.8 2.03 1.19 4.06 3.23 3.29 27.44-10.29 64.72-24.27 82.23-30.84a197.647 197.647 0 0089.76-67.88c5.07-6.89 11.2-15.22 22.7-30.84.94-1.28-.18-3.05-1.74-2.76-31.39 5.95-48.65 9.22-61.91 11.73z"
                    id="prefix__d4bNEuXjSt"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow6695390)"
                  />
                </g>
              </motion.g>
            </g>
            <g id="group_air_5">
              <filter
                id="prefix__shadow15027943"
                x={203.22}
                y={322.31}
                width={235.51}
                height={334.78}
                filterUnits="userSpaceOnUse"
                primitiveUnits="userSpaceOnUse"
              >
                <feFlood />
                <feComposite in2="SourceAlpha" operator="in" />
                <feGaussianBlur stdDeviation={3.61} />
                <feOffset dx={10} dy={10} result="afterOffset" />
                <feFlood floodColor="#fff" floodOpacity={0.78} />
                <feComposite in2="afterOffset" operator="in" />
                <feMorphology operator="dilate" radius={16} />
                <feComposite in2="SourceAlpha" operator="out" />
              </filter>
              <path
                d="M265.42 444.01c4.96 60 40.33 113.27 93.7 141.13 2.8 1.46-10-5.22 8.93 4.66 1.94 1.01 4.15-.75 3.6-2.87-7.36-28.36-17.37-66.9-22.07-85a197.634 197.634 0 00-58.13-96.36c-6.32-5.76-13.96-12.73-28.29-25.8-1.18-1.07-3.06-.14-2.93 1.44 2.63 31.84 4.08 49.35 5.19 62.8z"
                id="prefix__a72ypvtd1e"
                fill="#fff"
                fillOpacity={1}
                filter="url(#prefix__shadow15027943)"
              />
              <g>
                <filter
                  id="prefix__shadow3212672"
                  x={217.22}
                  y={336.31}
                  width={207.51}
                  height={306.78}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="out" />
                  <feGaussianBlur stdDeviation={3.46} />
                  <feOffset dx={10} dy={10} result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={0.8} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={4} />
                  <feComposite in2="SourceAlpha" operator="in" />
                </filter>
                <path
                  d="M265.42 444.01c4.96 60 40.33 113.27 93.7 141.13 2.8 1.46-10-5.22 8.93 4.66 1.94 1.01 4.15-.75 3.6-2.87-7.36-28.36-17.37-66.9-22.07-85a197.634 197.634 0 00-58.13-96.36c-6.32-5.76-13.96-12.73-28.29-25.8-1.18-1.07-3.06-.14-2.93 1.44 2.63 31.84 4.08 49.35 5.19 62.8z"
                  id="prefix__aMb3xtgES"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow3212672)"
                />
              </g>
            </g>
            <g id="group_air_6">
              <motion.g
                animate={{ rotateX: 360 }}
                transition={airTransition(1)}
              >
                <filter
                  id="prefix__shadow2881941"
                  x={181.13}
                  y={348.4}
                  width={280.7}
                  height={280.7}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.46} />
                  <feOffset result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={1} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={10} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                  id="prefix__dzqeNIxOt"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow2881941)"
                />
                <g>
                  <filter
                    id="prefix__shadow5863355"
                    x={183.13}
                    y={350.4}
                    width={276.7}
                    height={276.7}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={8} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                    id="prefix__aOs7VVQBO"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow5863355)"
                  />
                </g>
              </motion.g>
            </g>
            <g id="group_air_7">
              <motion.g
                animate={{ rotateY: 360 }}
                transition={
                  airTransition(1, .5)
                  
                }
              >
                <filter
                  id="prefix__shadow2881941"
                  x={181.13}
                  y={348.4}
                  width={280.7}
                  height={280.7}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.46} />
                  <feOffset result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={1} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={10} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                  id="prefix__dzqeNIxOt"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow2881941)"
                />
                <g>
                  <filter
                    id="prefix__shadow5863355"
                    x={183.13}
                    y={350.4}
                    width={276.7}
                    height={276.7}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={8} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                    id="prefix__aOs7VVQBO"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow5863355)"
                  />
                </g>
              </motion.g>
            </g>
            <g id="group_air_8">
              <motion.g
                style={{ rotate: 45 }}
                animate={{ rotateY: 360 }}
                transition={airTransition(1, .4)}
              >
                <filter
                  id="prefix__shadow2881941"
                  x={181.13}
                  y={348.4}
                  width={280.7}
                  height={280.7}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.46} />
                  <feOffset result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={1} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={10} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                  id="prefix__dzqeNIxOt"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow2881941)"
                />
                <g>
                  <filter
                    id="prefix__shadow5863355"
                    x={183.13}
                    y={350.4}
                    width={276.7}
                    height={276.7}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={8} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                    id="prefix__aOs7VVQBO"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow5863355)"
                  />
                </g>
              </motion.g>
            </g>
            <g id="group_air_9">
              <motion.g
                animate={{ rotateZ: 360 }}
                transition={airTransition(.6)}
              >
                <filter
                  id="prefix__shadow2881941"
                  x={181.13}
                  y={348.4}
                  width={280.7}
                  height={280.7}
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur stdDeviation={3.46} />
                  <feOffset result="afterOffset" />
                  <feFlood floodColor="#fff" floodOpacity={1} />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" radius={10} />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                  id="prefix__dzqeNIxOt"
                  fill="#fff"
                  fillOpacity={1}
                  filter="url(#prefix__shadow2881941)"
                />
                <g>
                  <filter
                    id="prefix__shadow5863355"
                    x={183.13}
                    y={350.4}
                    width={276.7}
                    height={276.7}
                    filterUnits="userSpaceOnUse"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feFlood />
                    <feComposite in2="SourceAlpha" operator="out" />
                    <feGaussianBlur stdDeviation={3.46} />
                    <feOffset result="afterOffset" />
                    <feFlood floodColor="#fff" floodOpacity={0.8} />
                    <feComposite in2="afterOffset" operator="in" />
                    <feMorphology operator="dilate" radius={8} />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                  <path
                    d="M422.82 488.75c0 55.93-45.41 101.34-101.34 101.34-55.94 0-101.35-45.41-101.35-101.34 0-55.94 45.41-101.35 101.35-101.35 55.93 0 101.34 45.41 101.34 101.35z"
                    id="prefix__aOs7VVQBO"
                    fill="#fff"
                    fillOpacity={1}
                    filter="url(#prefix__shadow5863355)"
                  />
                </g>
              </motion.g>
            </g>
          </g> 
        </motion.g>
      </g>
    </svg>
  )
}



AirScooterSVG.propTypes = {
  colourScheme: {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    skin: PropTypes.string,
    boots: PropTypes.string,
    tattoos: PropTypes.string,
    neckShadow: PropTypes.string,
    collarShadow: PropTypes.string,
  },
}
AirScooterSVG.defaultProps = {
  colourScheme: {
    primary: '#d4721d',
    secondary: '#e1c002',
    skin: '#fddbb9',
    boots: '#8e715e',
    tattoos: '#90c2e1',
    neckShadow: '#bba085',
    collarShadow: '#f0b90a',
  },
  size: 400,
}


export default AirScooterSVG

