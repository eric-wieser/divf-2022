/*
Language: Lean
Author: Patrick Massot
Category: scientific
Description: Language definition for Lean theorem prover
*/

RevealHighlight().hljs.registerLanguage("lean-goal", function(hljs) {
  return {
    name: "lean-goal",
    contains: [
      { className: 'goal-done',
        match: 'goals accomplished 🎉' },
      {
        className: 'goal-sym',
        begin: /⊢ /,
        relevance: 20,
        starts: {
          // end the highlighting if we are on a new line and the line does not have at
          // least two spaces in the beginning
          end: /^(?![ ]{2})/,
          subLanguage: 'lean'
        }
      },
      {
        className: 'goal-hyp',
        begin: /([^:]+)/,
        starts: {
          // end the highlighting if we are on a new line and the line does not have at
          // least two spaces in the beginning
          end: /^(?![ ]{2})/,
          subLanguage: 'lean'
        }
      },
    ]
  };
});
