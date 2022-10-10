import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'kr',
    resources: {
      kr: {
        translation: {
          donate: "Donate",
          warning: "※ First-time users: please read the Q&A below!",
          options: {
            reset: "reset",
            cancel: "undo",
            inanna: "Inanna Ready",
            hell: "Hell Mode (KR only)",
            skullSlider: "Place bombs on skulls?",
            speech: "Speech recognition (KR only)",
            speechWarning: "Your browser does not support speech recognition.",
          },
          message: {
            specialSkull: "Special (Hell) skull",
            initialSkull: "Initial skull",
            bombNumber: "-round bomb",
            placementTime: "placement",
            needBingo: " (Need bingo!)",
            cannotPlace: "Cannot place skull there!",
            impossibleInanna: "Bingo impossible! Inanna or GG",
            bombSpecialSkull: "Bomb on special skull...GG",
          },
          description: {
            q1: "Q. How do I use the tool?",
            a1: "Click on the positions of the initial two skulls. After, click on any position to place a bomb. Every time you place a bomb, it will automatically flip adjacent tiles.\n" +
            "If you put the bomb in the wrong tile, you can go back with the [UNDO] button, and if you want to reset the board, just click the [RESET] button.",
            q2: "Q. Where should I put the bombs?",
            a2: "The tool has a recommendation feature. Recommended tiles are marked with blue colors.\n" +
            "The recommendation logic prioritizes playing a bingo every 3rd round, followed by keeping the middle-top board clean for easy DPS.\n" +
            "Of course, a few formulas won't give the perfect answer for every possible combination, but it's generally usable :)",
            q3: "Q. What should I do if there's a skull or hammer in the recommended spot?",
            a3: "For flexibility, up to 3 recommendations are provided. The more recommended positions are displayed in dark blue, but the lighter blue spots are fine too. Also, whenever possible, we try to ensure that at least one of the three positions contains no skull.",
            q4: "Q. What if I don't want to stand on skulls to put the bombs?",
            a4: "You can adjust your preferences for bombs on skulls using the slider. The left side would not consider skulls at all, while the right side would avoid skulls as much as possible. If you put the slider the right side and still skull tiles are recommended, it means that you should really go for it.",
            q5: "Q. What if I plan to use Inanna?",
            a5: "There is an Inanna checkbox. If it is checked, the tool WILL NOT TRY TO MAKE A BINGO for the upcoming wipe and instead optimize the board for easy DPS.\n" +
            "However, since there is no situation where you can use Inanna twice in a row, the Inanna checkbox will become unchecked after using it to pass a wipe with no bingo.",
            q6: "Q. I don't have two monitors, can I still use this tool?",
            a6: "I designed the tool to be easy to view and use on mobile. DO YOU GUYS NOT HAVE PHONES?",
            q7: "Q. How can I use the tool if I'm busy avoiding patterns?",
            a7: "There is a voice recognition mode. However, it's not available for EN.",
            q8: "Q. What if I'm playing hell mode?",
            a8: "There is a hell mode checkbox. The first click on the grid will place the special skull tile, then the next click will place a normal skull tile.",
          },
        },
      },
      en: {
        translation: {
          donate: "Donate",
          warning: "※ First-time users: please read the Q&A below!",
          options: {
            reset: "reset",
            cancel: "undo",
            inanna: "Inanna Ready",
            hell: "Hell Mode (KR only)",
            skullSlider: "Place bombs on skulls?",
            speech: "Speech recognition (KR only)",
            speechWarning: "Your browser does not support speech recognition.",
          },
          message: {
            specialSkull: "Special (Hell) skull",
            initialSkull: "Initial skull",
            bombNumber: "-round bomb",
            placementTime: "placement",
            needBingo: " (Need bingo!)",
            cannotPlace: "Cannot place skull there!",
            impossibleInanna: "Bingo impossible! Inanna or GG",
            bombSpecialSkull: "Bomb on special skull...GG",
          },
          description: {
            q1: "Q. How do I use the tool?",
            a1: "Click on the positions of the initial two skulls. After, click on any position to place a bomb. Every time you place a bomb, it will automatically flip adjacent tiles.\n" +
            "If you put the bomb in the wrong tile, you can go back with the [UNDO] button, and if you want to reset the board, just click the [RESET] button.",
            q2: "Q. Where should I put the bombs?",
            a2: "The tool has a recommendation feature. Recommended tiles are marked with blue colors.\n" +
            "The recommendation logic prioritizes playing a bingo every 3rd round, followed by keeping the middle-top board clean for easy DPS.\n" +
            "Of course, a few formulas won't give the perfect answer for every possible combination, but it's generally usable :)",
            q3: "Q. What should I do if there's a skull or hammer in the recommended spot?",
            a3: "For flexibility, up to 3 recommendations are provided. The more recommended positions are displayed in dark blue, but the lighter blue spots are fine too. Also, whenever possible, we try to ensure that at least one of the three positions contains no skull.",
            q4: "Q. What if I don't want to stand on skulls to put the bombs?",
            a4: "You can adjust your preferences for bombs on skulls using the slider. The left side would not consider skulls at all, while the right side would avoid skulls as much as possible. If you put the slider the right side and still skull tiles are recommended, it means that you should really go for it.",
            q5: "Q. What if I plan to use Inanna?",
            a5: "There is an Inanna checkbox. If it is checked, the tool WILL NOT TRY TO MAKE A BINGO for the upcoming wipe and instead optimize the board for easy DPS.\n" +
            "However, since there is no situation where you can use Inanna twice in a row, the Inanna checkbox will become unchecked after using it to pass a wipe with no bingo.",
            q6: "Q. I don't have two monitors, can I still use this tool?",
            a6: "I designed the tool to be easy to view and use on mobile. DO YOU GUYS NOT HAVE PHONES?",
            q7: "Q. How can I use the tool if I'm busy avoiding patterns?",
            a7: "There is a voice recognition mode. However, it's not available for EN.",
            q8: "Q. What if I'm playing hell mode?",
            a8: "There is a hell mode checkbox. The first click on the grid will place the special skull tile, then the next click will place a normal skull tile.",
          },
        },
      }
    }
  });

export default i18n;
