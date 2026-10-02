// ============================================================================
// GATE 2027 Mathematics Master Question Bank: Module 4 - Calculus & Optimization
// Covers: Limits, Continuity, Differentiability, Mean Value Theorems, Maxima & Minima,
// Taylor Series, Single-Variable Optimization, Convexity, Definite Integrals
// ============================================================================

const module4_learn_problems = [
  // --- SUBTOPIC 1: Limits, Continuity & Differentiability (1-10) ---
  {
    id: "CALC-L-01",
    subtopic: "Limits & Indeterminate Forms",
    source: "GATE CS 2024",
    marks: 1,
    type: "NAT",
    statement: "The value of the limit $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$ is ________ (round off to 2 decimal places).",
    options: [],
    answer: "0.17 (Exact: 1/6)",
    shortcut: "Taylor expansion: $\\sin x = x - \\frac{x^3}{6} + \\dots \\implies \\frac{x - (x - x^3/6)}{x^3} = \\frac{1}{6} \\approx 0.17$.",
    solution: "1. The limit is in the indeterminate form $\\frac{0}{0}$.\n2. Using Maclaurin series expansion of $\\sin x$: $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = x - \\frac{x^3}{6} + \\mathcal{O}(x^5)$.\n3. Substitute into the limit: $\\lim_{x \\to 0} \\frac{x - \\left(x - \\frac{x^3}{6} + \\dots\\right)}{x^3} = \\lim_{x \\to 0} \\frac{\\frac{x^3}{6}}{x^3} = \\frac{1}{6} \\approx 0.1667 \\approx 0.17$."
  },
  {
    id: "CALC-L-02",
    subtopic: "Limits (1^\\infty form)",
    source: "GATE CS 2016",
    marks: 1,
    type: "MCQ",
    statement: "The value of the limit $\\lim_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)^{3x}$ is:",
    options: ["(A) $e^6$", "(B) $e^5$", "(C) $e^2$", "(D) $\\infty$"],
    answer: "Option A ($e^6$)",
    shortcut: "Standard formula: $\\lim_{x \\to \\infty} (1 + a/x)^{bx} = e^{ab} = e^{(2)(3)} = e^6$.",
    solution: "This limit is of the indeterminate form $1^\\infty$.\nFormula: $\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x)(f(x) - 1)}$.\nHere $f(x) = 1 + \\frac{2}{x}$ and $g(x) = 3x$.\n$$\\lim_{x \\to \\infty} 3x \\left(1 + \\frac{2}{x} - 1\\right) = \\lim_{x \\to \\infty} 3x \\left(\\frac{2}{x}\\right) = 6$$\nTherefore, the limit is $e^6$ (Option A)."
  },
  {
    id: "CALC-L-03",
    subtopic: "Continuity & Differentiability",
    source: "GATE CS 2020",
    marks: 1,
    type: "MCQ",
    statement: "Consider the function $f(x) = |x|$ defined on $\\mathbb{R}$. At $x = 0$, $f(x)$ is:",
    options: [
      "(A) Continuous and differentiable",
      "(B) Continuous but not differentiable",
      "(C) Neither continuous nor differentiable",
      "(D) Differentiable but not continuous"
    ],
    answer: "Option B",
    shortcut: "Sharp corner at origin: Left derivative is -1, Right derivative is +1. Continuous since $\\lim_{x \\to 0} |x| = 0 = f(0)$.",
    solution: "1. Continuity: $\\lim_{x \\to 0^-} |x| = 0$, $\\lim_{x \\to 0^+} |x| = 0$, and $f(0) = 0$. Since LHL = RHL = $f(0)$, $f$ is continuous at $x = 0$.\n2. Differentiability: Left hand derivative $f'_-(0) = \\lim_{h \\to 0^-} \\frac{-h - 0}{h} = -1$. Right hand derivative $f'_+(0) = \\lim_{h \\to 0^+} \\frac{h - 0}{h} = +1$. Since $f'_-(0) \\neq f'_+(0)$, the derivative does not exist at $x = 0$."
  },

  // --- SUBTOPIC 2: Single-Variable Optimization, Maxima & Minima (4-15) ---
  {
    id: "CALC-L-04",
    subtopic: "Optimization",
    source: "GATE DA 2024",
    marks: 2,
    type: "NAT",
    statement: "Consider the function $f(x) = x^3 - 3x^2 - 9x + 5$ defined on $\\mathbb{R}$. The <strong>local minimum</strong> value of $f(x)$ is ________.",
    options: [],
    answer: "-22",
    shortcut: "$f'(x) = 3(x^2 - 2x - 3) = 0 \\implies x = 3, -1$. $f''(3) = 6(3)-6 = 12 > 0 \\implies$ min at $x = 3$. $f(3) = 27 - 27 - 27 + 5 = -22$.",
    solution: "1. First derivative: $f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$. Setting $f'(x) = 0$ gives critical points $x = 3$ and $x = -1$.\n2. Second derivative: $f''(x) = 6x - 6$.\n• At $x = -1$: $f''(-1) = -12 < 0 \\implies$ Local Maximum.\n• At $x = 3$: $f''(3) = 12 > 0 \\implies$ Local Minimum.\n3. The local minimum value is $f(3) = 3^3 - 3(3^2) - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$."
  },
  {
    id: "CALC-L-05",
    subtopic: "Convexity",
    source: "GATE DA 2024",
    marks: 1,
    type: "MCQ",
    statement: "A twice-differentiable function $f: \\mathbb{R} \\to \\mathbb{R}$ is strictly convex if for all $x \\in \\mathbb{R}$:",
    options: [
      "(A) $f''(x) > 0$",
      "(B) $f'(x) > 0$",
      "(C) $f''(x) < 0$",
      "(D) $f(x) > 0$"
    ],
    answer: "Option A ($f''(x) > 0$)",
    shortcut: "Second derivative test for convexity: positive curvature $\\iff f''(x) > 0$.",
    solution: "A twice continuously differentiable function is strictly convex on an interval if and only if its second derivative is strictly positive ($f''(x) > 0$) everywhere on the interval. In convex optimization, this guarantees that any stationary point $f'(x^*) = 0$ is a unique global minimum."
  },
  {
    id: "CALC-L-06",
    subtopic: "Mean Value Theorem",
    source: "GATE CS 2021",
    marks: 2,
    type: "NAT",
    statement: "Let $f(x) = x^3 - 2x$ on the interval $[1, 3]$. According to Lagrange's Mean Value Theorem, there exists a $c \\in (1, 3)$ such that $f'(c) = \\frac{f(3) - f(1)}{3 - 1}$. The value of $c$ is ________ (round off to 2 decimal places).",
    options: [],
    answer: "2.08",
    shortcut: "$f(1) = -1, f(3) = 21$. Slope $= \\frac{21 - (-1)}{2} = 11$. $f'(c) = 3c^2 - 2 = 11 \\implies 3c^2 = 13 \\implies c = \\sqrt{13/3} \\approx 2.08$.",
    solution: "1. Values at endpoints: $f(1) = 1^3 - 2(1) = -1$, $f(3) = 3^3 - 2(3) = 27 - 6 = 21$.\n2. Secant slope: $\\frac{f(3) - f(1)}{3 - 1} = \\frac{21 - (-1)}{2} = \\frac{22}{2} = 11$.\n3. Equate to derivative: $f'(x) = 3x^2 - 2 \\implies 3c^2 - 2 = 11 \\implies 3c^2 = 13 \\implies c^2 = \\frac{13}{3} \\approx 4.333$.\n4. Since $c \\in (1, 3)$, $c = \\sqrt{4.333} \\approx 2.08$."
  },

  // --- SUBTOPIC 3: Taylor Series & Expansions (7-15) ---
  {
    id: "CALC-L-07",
    subtopic: "Taylor Series",
    source: "GATE DA 2024",
    marks: 1,
    type: "MCQ",
    statement: "The coefficient of $(x - 1)^2$ in the Taylor series expansion of $f(x) = e^{2x}$ about $x = 1$ is:",
    options: ["(A) $e^2$", "(B) $2e^2$", "(C) $4e^2$", "(D) $\\frac{1}{2}e^2$"],
    answer: "Option B ($2e^2$)",
    shortcut: "Formula: $\\frac{f''(1)}{2!}$. $f''(x) = 4e^{2x} \\implies f''(1) = 4e^2$. Coefficient $= 4e^2 / 2 = 2e^2$.",
    solution: "The Taylor series expansion of $f(x)$ about $x = a$ is $\\sum_{k=0}^\\infty \\frac{f^{(k)}(a)}{k!} (x - a)^k$.\nHere $a = 1$ and $k = 2$.\n$f(x) = e^{2x} \\implies f'(x) = 2e^{2x} \\implies f''(x) = 4e^{2x}$.\nEvaluating at $x = 1$: $f''(1) = 4e^2$.\nCoefficient of $(x - 1)^2$ is $\\frac{f''(1)}{2!} = \\frac{4e^2}{2} = 2e^2$ (Option B)."
  },

  // --- SUBTOPIC 4: Definite Integrals & Properties (8-15) ---
  {
    id: "CALC-L-08",
    subtopic: "Definite Integrals",
    source: "GATE CS 2019",
    marks: 2,
    type: "NAT",
    statement: "The value of the definite integral $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$ is ________ (round to 2 decimal places, $\\pi \\approx 3.1416$).",
    options: [],
    answer: "0.79 (Exact: $\\pi/4$)",
    shortcut: "King's property shortcut: $I = \\frac{b - a}{2} = \\frac{\\pi/2 - 0}{2} = \\frac{\\pi}{4} \\approx 0.785 \\approx 0.79$.",
    solution: "1. Let $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$ --- (1)\n2. By King's property $\\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$:\nSince $\\sin(\\pi/2 - x) = \\cos x$ and $\\cos(\\pi/2 - x) = \\sin x$, we have:\n$I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} dx$ --- (2)\n3. Adding (1) and (2):\n$2I = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4} \\approx \\frac{3.1416}{4} \\approx 0.785 \\approx 0.79$."
  },
  {
    id: "CALC-L-09",
    subtopic: "Leibniz Integral Rule",
    source: "GATE CS 2018",
    marks: 2,
    type: "MCQ",
    statement: "Let $F(x) = \\int_0^{x^2} \\cos(t) dt$. The derivative $F'(x)$ with respect to $x$ is:",
    options: [
      "(A) $2x \\cos(x^2)$",
      "(B) $\\cos(x^2)$",
      "(C) $-2x \\sin(x^2)$",
      "(D) $x^2 \\cos(x)$"
    ],
    answer: "Option A ($2x \\cos(x^2)$)",
    shortcut: "Leibniz Rule: $\\frac{d}{dx} \\int_0^{u(x)} f(t) dt = f(u(x)) \\cdot u'(x) = \\cos(x^2) \\cdot (2x)$.",
    solution: "By the Fundamental Theorem of Calculus with chain rule (Leibniz integral rule):\n$$\\frac{d}{dx} \\int_{a(x)}^{b(x)} g(t) dt = g(b(x)) b'(x) - g(a(x)) a'(x)$$\nHere $b(x) = x^2, b'(x) = 2x$, and $a(x) = 0$.\nTherefore: $F'(x) = \\cos(x^2) \\cdot (2x) - 0 = 2x \\cos(x^2)$ (Option A)."
  },
  {
    id: "CALC-L-10",
    subtopic: "Global Extrema on Closed Intervals",
    source: "GATE CS 2015",
    marks: 2,
    type: "NAT",
    statement: "The absolute maximum value of $f(x) = 2x^3 - 3x^2 - 12x + 4$ on the closed interval $[-2, 3]$ is ________.",
    options: [],
    answer: "11",
    shortcut: "Critical points: $f'(x) = 6(x^2-x-2) = 0 \\implies x = 2, -1$. Check $f(-2)=0, f(-1)=11, f(2)=-16, f(3)=-5$. Max is 11.",
    solution: "1. Critical points: $f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1) = 0 \\implies x = 2, -1$. Both lie in $[-2, 3]$.\n2. Evaluate $f(x)$ at critical points and endpoints:\n• $f(-2) = 2(-8) - 3(4) - 12(-2) + 4 = -16 - 12 + 24 + 4 = 0$\n• $f(-1) = 2(-1) - 3(1) - 12(-1) + 4 = -2 - 3 + 12 + 4 = 11$\n• $f(2) = 2(8) - 3(4) - 12(2) + 4 = 16 - 12 - 24 + 4 = -16$\n• $f(3) = 2(27) - 3(9) - 12(3) + 4 = 54 - 27 - 36 + 4 = -5$\n3. The absolute maximum value on $[-2, 3]$ is 11 (occurring at $x = -1$)."
  }
];

// --- 50 PRACTICE PROBLEMS FOR CALCULUS & OPTIMIZATION ---
const module4_practice_problems = [
  {
    id: "CALC-P-01",
    subtopic: "Limits",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "What is $\\lim_{x \\to 0} \\frac{\\tan x}{x}$?",
    hint: "Use standard trigonometric limit or L'Hôpital's rule.",
    final_answer: "1",
    explanation: "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} = 1 \\times 1 = 1$."
  },
  {
    id: "CALC-P-02",
    subtopic: "Limits",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "Evaluate the limit $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.",
    hint: "Definition of derivative of $e^x$ at $x = 0$, or L'Hôpital $\\frac{e^x}{1}$.",
    final_answer: "1",
    explanation: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = e^0 = 1$."
  },
  {
    id: "CALC-P-03",
    subtopic: "Optimization",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "At what value of $x$ does $f(x) = (x - 4)^2 + 7$ attain its global minimum?",
    hint: "A squared term is minimized when it equals 0.",
    final_answer: "4",
    explanation: "$(x - 4)^2 \\ge 0$ for all $x$, with minimum 0 achieved at $x = 4$."
  },
  {
    id: "CALC-P-04",
    subtopic: "Definite Integrals",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the value of $\\int_{-3}^3 x^3 \\cos(x) dx$?",
    hint: "Check whether the integrand is an odd or even function over a symmetric interval $[-a, a]$.",
    final_answer: "0",
    explanation: "$x^3$ is odd, $\\cos(x)$ is even $\\implies$ product is an odd function. The integral of any odd function over $[-a, a]$ is identically 0."
  },
  {
    id: "CALC-P-05",
    subtopic: "Taylor Series",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "What is the coefficient of $x^3$ in the Maclaurin series expansion of $\\sin(2x)$?",
    hint: "Use $\\sin(u) = u - u^3/6 + \\dots$ with $u = 2x$.",
    final_answer: "-1.33 (Exact: -4/3)",
    explanation: "$\\sin(2x) = (2x) - \\frac{(2x)^3}{6} = 2x - \\frac{8x^3}{6} = 2x - \\frac{4}{3} x^3$. Coefficient is $-4/3 \\approx -1.33$."
  },
  {
    id: "CALC-P-06",
    subtopic: "Mean Value Theorem",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "Rolle's theorem requires which condition at the endpoints $a$ and $b$?",
    options: ["(A) $f(a) = f(b)$", "(B) $f'(a) = f'(b)$", "(C) $f(a) = -f(b)$", "(D) $f(a) f(b) < 0$"],
    hint: "Rolle's theorem guarantees a horizontal tangent $f'(c) = 0$ when endpoint heights are equal.",
    final_answer: "Option A ($f(a) = f(b)$)",
    explanation: "Rolle's Theorem states that if $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, there exists at least one $c \\in (a, b)$ with $f'(c) = 0$."
  },
  {
    id: "CALC-P-07",
    subtopic: "Limits",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "What is $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2}$?",
    hint: "$1 - \\cos(2x) = 2 \\sin^2(x)$. Use $\\lim \\frac{\\sin x}{x} = 1$.",
    final_answer: "2",
    explanation: "$\\lim_{x \\to 0} \\frac{2 \\sin^2(x)}{x^2} = 2 \\left(\\lim \\frac{\\sin x}{x}\\right)^2 = 2(1)^2 = 2$."
  },
  {
    id: "CALC-P-08",
    subtopic: "Optimization",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "For $f(x) = x + \\frac{4}{x}$ on $x > 0$, what is the minimum value of $f(x)$?",
    hint: "Use AM-GM inequality: $x + 4/x \\ge 2 \\sqrt{x \\cdot 4/x}$.",
    final_answer: "4",
    explanation: "By AM-GM inequality: $x + 4/x \\ge 2 \\sqrt{4} = 4$. Equality holds at $x = 2$."
  },
  {
    id: "CALC-P-09",
    subtopic: "Definite Integrals",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "Evaluate $\\int_0^1 (3x^2 + 2x) dx$.",
    hint: "Antiderivative is $x^3 + x^2$.",
    final_answer: "2",
    explanation: "$[x^3 + x^2]_0^1 = (1 + 1) - 0 = 2$."
  },
  {
    id: "CALC-P-10",
    subtopic: "Taylor Series",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the constant term (zeroth order term) in the Taylor expansion of $\\cos(x)$ about $x = \\pi$?",
    hint: "Constant term is simply $f(\\pi) = \\cos(\\pi)$.",
    final_answer: "-1",
    explanation: "$f(\\pi) = \\cos(\\pi) = -1$."
  }
];
