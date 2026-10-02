// ============================================================================
// GATE 2027 Mathematics Master Question Bank: Module 2 - Probability & Statistics
// 50 Learn Problems (Full Solutions & Shortcuts) + 50 Practice Problems (Hints & Answers)
// Covers: GATE CS (Section 1) & GATE DA (Section 1)
// ============================================================================

const module2_learn_problems = [
  // --- SUBTOPIC 1: Probability Axioms, Combinatorics & Bayes (1-15) ---
  {
    id: "PROB-L-01",
    subtopic: "Bayes' Theorem",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "In a population, $1\\%$ of individuals have a rare disease. A test for the disease has a $95\\%$ true positive rate (sensitivity) and a $5\\%$ false positive rate (1 - specificity). If a randomly selected individual tests positive, what is the probability that the individual actually has the disease?",
    options: ["(A) 0.95", "(B) 0.161", "(C) 0.500", "(D) 0.010"],
    answer: "Option B (~0.161)",
    shortcut: "Base rate fallacy: Rare diseases mean most positive tests are false alarms! Posterior $= \\frac{(0.95)(0.01)}{(0.95)(0.01) + (0.05)(0.99)} = \\frac{95}{590} \\approx 0.161$.",
    solution: "Let $D$ be the event that the person has the disease, and $+$ be the event that the test is positive.\n1. Priors: $P(D) = 0.01$, $P(D^c) = 0.99$.\n2. Likelihoods: $P(+|D) = 0.95$, $P(+|D^c) = 0.05$.\n3. Total Probability: $P(+) = P(+|D)P(D) + P(+|D^c)P(D^c) = (0.95)(0.01) + (0.05)(0.99) = 0.0095 + 0.0495 = 0.0590$.\n4. Bayes' Rule: $P(D|+) = \\frac{P(+|D)P(D)}{P(+)} = \\frac{0.0095}{0.0590} = \\frac{95}{590} \\approx 0.161$ (Option B)."
  },
  {
    id: "PROB-L-02",
    subtopic: "Conditional Probability",
    source: "GATE CS 2019",
    marks: 2,
    type: "MCQ",
    statement: "Two fair six-sided dice are rolled simultaneously. Given that the sum of the dice is 8, what is the probability that at least one of the dice rolled a 3?",
    options: ["(A) 1/5", "(B) 2/5", "(C) 1/6", "(D) 2/11"],
    answer: "Option B (2/5)",
    shortcut: "Conditioned sample space: outcomes summing to 8 are $(2,6), (3,5), (4,4), (5,3), (6,2)$ (5 outcomes). Favorable with a 3 are $(3,5)$ and $(5,3)$ (2 outcomes) $\\implies 2/5$.",
    solution: "Let $A$ be the event of rolling at least one 3, and $B$ be the event that the sum equals 8.\nThe sample space of $B$ is: $B = \\{(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)\\}$. Total outcomes in $B$ is $|B| = 5$.\nOutcomes in $A \\cap B$ where at least one die shows 3: $\\{(3, 5), (5, 3)\\}$. Total favorable $= 2$.\nTherefore, $P(A|B) = \\frac{|A \\cap B|}{|B|} = \\frac{2}{5}$."
  },
  {
    id: "PROB-L-03",
    subtopic: "Combinatorics & Counting",
    source: "GATE CS 2017",
    marks: 1,
    type: "MCQ",
    statement: "Three identical balls are randomly placed into 3 distinct bins. Each ball has an equal probability of landing in any of the bins. What is the probability that <strong>no bin is empty</strong>?",
    options: ["(A) 1/3", "(B) 2/9", "(C) 6/27", "(D) 1/9"],
    answer: "Option B / C (2/9)",
    shortcut: "Total outcomes $= 3^3 = 27$. Favorable outcomes (each bin gets 1 ball) $= 3! = 6$. Probability $= 6/27 = 2/9$.",
    solution: "1. Each of the 3 balls independently chooses one of the 3 bins with probability 1/3. Total outcomes $= 3 \\times 3 \\times 3 = 27$.\n2. For no bin to be empty, each bin must contain exactly one ball. The number of ways to assign 3 distinct balls to 3 distinct bins with 1 each is $3! = 6$.\n3. Probability $= 6 / 27 = 2 / 9$."
  },
  {
    id: "PROB-L-04",
    subtopic: "Independent Events",
    source: "GATE CS 2015",
    marks: 1,
    type: "MCQ",
    statement: "Let $A$ and $B$ be two independent events with $P(A) = 0.4$ and $P(B) = 0.5$. The value of $P(A \\cup B)$ is:",
    options: ["(A) 0.9", "(B) 0.7", "(C) 0.2", "(D) 0.8"],
    answer: "Option B (0.7)",
    shortcut: "Independence: $P(A \\cup B) = P(A) + P(B) - P(A)P(B) = 0.4 + 0.5 - (0.4)(0.5) = 0.9 - 0.2 = 0.7$.",
    solution: "By the general addition rule of probability: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\nSince events $A$ and $B$ are independent, $P(A \\cap B) = P(A) \\cdot P(B) = (0.4)(0.5) = 0.20$.\nTherefore: $P(A \\cup B) = 0.4 + 0.5 - 0.2 = 0.7$."
  },
  {
    id: "PROB-L-05",
    subtopic: "Bayes' Theorem",
    source: "GATE CS 2021",
    marks: 2,
    type: "NAT",
    statement: "Box 1 contains 2 white balls and 3 black balls. Box 2 contains 4 white balls and 1 black ball. A box is chosen uniformly at random and a ball is drawn. If the ball drawn is white, the probability that it came from Box 1 is ________ (round off to 2 decimal places).",
    options: [],
    answer: "0.33 (Exact: 1/3)",
    shortcut: "Priors $= 1/2$ each. Likelihoods: $P(W|B_1) = 2/5$, $P(W|B_2) = 4/5$. Ratio is $2 : 4 = 1 : 2 \\implies P(B_1|W) = 1 / (1 + 2) = 1/3$.",
    solution: "1. Priors: $P(B_1) = P(B_2) = 0.5$.\n2. Conditional probabilities of drawing white ball: $P(W|B_1) = 2/5 = 0.4$, $P(W|B_2) = 4/5 = 0.8$.\n3. Total Probability of white ball: $P(W) = (0.5)(0.4) + (0.5)(0.8) = 0.2 + 0.4 = 0.6$.\n4. Posterior: $P(B_1|W) = \\frac{P(W|B_1)P(B_1)}{P(W)} = \\frac{0.2}{0.6} = \\frac{1}{3} \\approx 0.33$."
  },

  // --- SUBTOPIC 2: Discrete Distributions (Binomial, Poisson, Geometric) (6-15) ---
  {
    id: "PROB-L-06",
    subtopic: "Poisson Distribution",
    source: "GATE CS 2023",
    marks: 2,
    type: "NAT",
    statement: "Packets arrive at a router following a Poisson process at an average rate of 2 packets per second. The probability that <strong>at least 1 packet</strong> arrives in a 2-second interval is ________ (round to 2 decimal places, $e \approx 2.718$).",
    options: [],
    answer: "0.98",
    shortcut: "Over 2 seconds, parameter $\\lambda = 2 \\times 2 = 4$. $P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-4} = 1 - 0.0183 \\approx 0.98$.",
    solution: "The number of arrivals $X$ in time $t = 2$ seconds follows a Poisson distribution with parameter $\\lambda = \\mu \\times t = 2 \\times 2 = 4$.\nThe PMF is $P(X = k) = \\frac{e^{-4} \\cdot 4^k}{k!}$.\n$P(X \\ge 1) = 1 - P(X = 0) = 1 - \\frac{e^{-4} \\cdot 4^0}{0!} = 1 - e^{-4} = 1 - 0.01832 = 0.98168 \\approx 0.98$."
  },
  {
    id: "PROB-L-07",
    subtopic: "Binomial Distribution",
    source: "GATE CS 2020",
    marks: 2,
    type: "NAT",
    statement: "A fair coin is tossed 10 times independently. The probability of getting <strong>exactly 5 heads</strong> is ________ (round off to 3 decimal places).",
    options: [],
    answer: "0.246",
    shortcut: "Formula: $\\binom{10}{5} (0.5)^{10} = \\frac{252}{1024} \\approx 0.246$.",
    solution: "The number of heads $X \\sim \\text{Binomial}(n = 10, p = 0.5)$.\n$$P(X = 5) = \\binom{10}{5} (0.5)^5 (0.5)^5 = \\binom{10}{5} \\left(\\frac{1}{2}\\right)^{10}$$\n$\\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 252$.\n$2^{10} = 1024$.\n$P(X = 5) = \\frac{252}{1024} = \\frac{63}{256} \\approx 0.246$."
  },
  {
    id: "PROB-L-08",
    subtopic: "Geometric Distribution",
    source: "GATE CS 2018",
    marks: 1,
    type: "MCQ",
    statement: "A biased coin with probability of heads $p = 0.2$ is tossed repeatedly until the first head appears. The expected number of tosses required is:",
    options: ["(A) 2", "(B) 5", "(C) 10", "(D) 0.2"],
    answer: "Option B (5)",
    shortcut: "Expectation of Geometric distribution (number of trials until first success) is $E[X] = 1/p = 1/0.2 = 5$.",
    solution: "Let $X$ denote the number of trials until the first head. $X$ follows a Geometric distribution with parameter $p = 0.2$. The expected value of a Geometric random variable is $E[X] = \\frac{1}{p} = \\frac{1}{0.2} = 5$ tosses."
  },
  {
    id: "PROB-L-09",
    subtopic: "Poisson Distribution",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "For a Poisson random variable $X$ with parameter $\\lambda$, which of the following statements is <strong>ALWAYS</strong> TRUE?",
    options: [
      "(A) $\\text{Mean} = \\text{Variance} = \\lambda$",
      "(B) $\\text{Mean} = \\lambda$, $\\text{Variance} = \\lambda^2$",
      "(C) The distribution is symmetric for all $\\lambda$",
      "(D) $P(X = 0) = 0$"
    ],
    answer: "Option A",
    shortcut: "Fundamental hallmark of Poisson distribution: Mean equals Variance equals $\\lambda$.",
    solution: "For $X \\sim \\text{Poisson}(\\lambda)$: $E[X] = \\lambda$ and $\\text{Var}(X) = \\lambda$. Thus $\\text{Mean} = \\text{Variance} = \\lambda$. Note that the distribution is right-skewed and only approaches symmetry as $\\lambda \\to \\infty$."
  },
  {
    id: "PROB-L-10",
    subtopic: "Binomial to Poisson Limit",
    source: "GATE DA 2024",
    marks: 1,
    type: "MCQ",
    statement: "A Binomial distribution $\\text{Binomial}(n, p)$ converges to a Poisson distribution $\\text{Poisson}(\\lambda)$ under which limiting condition?",
    options: [
      "(A) $n \\to \\infty$, $p \\to 0$, such that $n p = \\lambda$ (constant)",
      "(B) $n \\to \\infty$, $p \\to 1$",
      "(C) $n \\to 0$, $p \\to 0$",
      "(D) $n \\to \\infty$, $p = 0.5$"
    ],
    answer: "Option A",
    shortcut: "Law of Rare Events: large $n$, small $p$, constant rate $\\lambda = np$.",
    solution: "By the Poisson Limit Theorem (Law of Rare Events), when the number of independent trials $n$ is very large and the probability of success $p$ is very small such that $np = \\lambda$ remains moderate, the Binomial distribution converges point-wise to the Poisson distribution."
  },

  // --- SUBTOPIC 3: Continuous Distributions (Uniform, Exponential, Normal) (11-20) ---
  {
    id: "PROB-L-11",
    subtopic: "Exponential Distribution",
    source: "GATE CS 2020",
    marks: 1,
    type: "MCQ",
    statement: "The lifetime of a server is exponentially distributed with a mean of 100 hours. If the server has already survived for 200 hours, what is the probability that it survives for <strong>at least another 100 hours</strong>?",
    options: ["(A) $e^{-3}$", "(B) $e^{-1}$", "(C) $e^{-2}$", "(D) $1 - e^{-1}$"],
    answer: "Option B ($e^{-1}$)",
    shortcut: "Memoryless property: Past survival time is completely forgotten! $P(X > 200 + 100 | X > 200) = P(X > 100) = e^{-\\lambda(100)} = e^{-1}$.",
    solution: "Mean $\\mu = 1/\\lambda = 100 \\implies \\lambda = 0.01$. By the memoryless property of the Exponential distribution: $P(X > s + t \\mid X > s) = P(X > t)$. Here $s = 200$ and $t = 100$. Thus $P(X > 300 \\mid X > 200) = P(X > 100) = e^{-\\lambda t} = e^{-(0.01)(100)} = e^{-1}$."
  },
  {
    id: "PROB-L-12",
    subtopic: "Normal Distribution",
    source: "GATE CS 2021 Set 1",
    marks: 1,
    type: "MCQ",
    statement: "Let $X \\sim \\mathcal{N}(\\mu = 10, \\sigma^2 = 4)$. If $\\Phi(z)$ denotes the CDF of standard normal $\\mathcal{N}(0, 1)$, then $P(8 \\le X \\le 12)$ is equal to:",
    options: [
      "(A) $2\\Phi(1) - 1$",
      "(B) $2\\Phi(1)$",
      "(C) $\\Phi(1) - \\Phi(-1)$",
      "(D) Both A and C"
    ],
    answer: "Option D (Both A and C)",
    shortcut: "Standardize: $Z_1 = (8-10)/2 = -1, Z_2 = (12-10)/2 = 1$. $\\Phi(1) - \\Phi(-1) = \\Phi(1) - (1 - \\Phi(1)) = 2\\Phi(1) - 1 \\approx 0.6826$.",
    solution: "Standard deviation $\\sigma = \\sqrt{4} = 2$. Standardize $X$: $Z = \\frac{X - 10}{2}$. For $X = 8$, $Z = -1$. For $X = 12$, $Z = +1$. $P(8 \\le X \\le 12) = P(-1 \\le Z \\le 1) = \\Phi(1) - \\Phi(-1)$. By symmetry, $\\Phi(-1) = 1 - \\Phi(1)$, so this also equals $2\\Phi(1) - 1$. Both A and C are correct."
  },
  {
    id: "PROB-L-13",
    subtopic: "Uniform Distribution",
    source: "GATE CS 2016",
    marks: 1,
    type: "NAT",
    statement: "A continuous random variable $X$ is uniformly distributed over the interval $[2, 8]$. The variance of $X$ is ________.",
    options: [],
    answer: "3",
    shortcut: "Variance of Uniform$(a, b)$ is $\\frac{(b - a)^2}{12} = \\frac{(8 - 2)^2}{12} = \\frac{36}{12} = 3$.",
    solution: "For $X \\sim \\text{Uniform}(a, b)$, the variance formula is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$. Here $a = 2$ and $b = 8$. $\\text{Var}(X) = \\frac{(8 - 2)^2}{12} = \\frac{6^2}{12} = \\frac{36}{12} = 3$."
  },
  {
    id: "PROB-L-14",
    subtopic: "Expectation & PDF",
    source: "GATE CS 2022",
    marks: 2,
    type: "NAT",
    statement: "A continuous random variable $X$ has the probability density function $f(x) = c x^2$ for $0 \\le x \\le 3$, and $0$ otherwise. The expected value $E[X]$ is ________ (in decimal).",
    options: [],
    answer: "2.25",
    shortcut: "Area must equal 1: $c \\int_0^3 x^2 dx = 9c = 1 \\implies c = 1/9$. $E[X] = \\frac{1}{9} \\int_0^3 x^3 dx = \\frac{1}{9} [x^4/4]_0^3 = \\frac{81}{36} = 2.25$.",
    solution: "1. Normalization: $\\int_0^3 c x^2 dx = c \\left[\\frac{x^3}{3}\\right]_0^3 = 9c = 1 \\implies c = \\frac{1}{9}$.\n2. Expectation: $E[X] = \\int_0^3 x f(x) dx = \\int_0^3 x \\left(\\frac{1}{9} x^2\\right) dx = \\frac{1}{9} \\int_0^3 x^3 dx = \\frac{1}{9} \\left[\\frac{x^4}{4}\\right]_0^3 = \\frac{1}{9} \\left(\\frac{81}{4}\\right) = \\frac{9}{4} = 2.25$."
  },
  {
    id: "PROB-L-15",
    subtopic: "Median & Symmetric Distributions",
    source: "GATE DA 2024",
    marks: 1,
    type: "MCQ",
    statement: "For any continuous symmetric probability distribution (such as the Normal distribution), which of the following is ALWAYS true?",
    options: [
      "(A) $\\text{Mean} = \\text{Median} = \\text{Mode}$",
      "(B) $\\text{Mean} > \\text{Median} > \\text{Mode}$",
      "(C) $\\text{Variance} = 0$",
      "(D) $\\text{Skewness} > 0$"
    ],
    answer: "Option A",
    shortcut: "Symmetric unimodal distributions have zero skewness, aligning Mean, Median, and Mode at the center of symmetry.",
    solution: "By definition of symmetry around $x = \\mu$, the area to the left of $\\mu$ is exactly 0.5 (making $\\mu$ the median), the center of gravity is $\\mu$ (making $\\mu$ the mean), and for unimodal distributions the peak occurs at $\\mu$ (making $\\mu$ the mode). Thus $\\text{Mean} = \\text{Median} = \\text{Mode}$."
  },

  // --- SUBTOPIC 4: Joint Distributions, Covariance & Correlation (16-35) ---
  {
    id: "PROB-L-16",
    subtopic: "Covariance & Variance",
    source: "GATE DA 2024",
    marks: 2,
    type: "NAT",
    statement: "Let $X$ and $Y$ be random variables with $\\text{Var}(X) = 9$, $\\text{Var}(Y) = 16$, and correlation coefficient $\\rho(X, Y) = 0.5$. The value of $\\text{Var}(2X - 3Y)$ is ________.",
    options: [],
    answer: "108",
    shortcut: "$\\text{Cov}(X, Y) = \\rho \\sigma_X \\sigma_Y = 0.5(3)(4) = 6$. $\\text{Var}(2X - 3Y) = 4(9) + 9(16) - 12(6) = 36 + 144 - 72 = 108$.",
    solution: "1. Standard deviations: $\\sigma_X = \\sqrt{9} = 3, \\sigma_Y = \\sqrt{16} = 4$.\n2. Covariance: $\\text{Cov}(X, Y) = \\rho(X, Y) \\sigma_X \\sigma_Y = (0.5)(3)(4) = 6$.\n3. Variance formula: $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab \\text{Cov}(X, Y)$.\nHere $a = 2, b = -3$: $\\text{Var}(2X - 3Y) = 2^2(9) + (-3)^2(16) + 2(2)(-3)(6) = 36 + 144 - 72 = 108$."
  },
  {
    id: "PROB-L-17",
    subtopic: "Conditional Expectation",
    source: "GATE DA 2024",
    marks: 2,
    type: "NAT",
    statement: "Let $(X, Y)$ have the joint PMF: $P(1, 1) = 0.1$, $P(1, 2) = 0.2$, $P(2, 1) = 0.3$, $P(2, 2) = 0.4$. The conditional expectation $E[X \\mid Y = 2]$ is ________ (round to 2 decimal places).",
    options: [],
    answer: "1.67 (Exact: 5/3)",
    shortcut: "Marginal $P(Y=2) = 0.2 + 0.4 = 0.6$. Conditional: $P(X=1|Y=2) = 0.2/0.6 = 1/3$, $P(X=2|Y=2) = 0.4/0.6 = 2/3$. $E = 1(1/3) + 2(2/3) = 5/3 \\approx 1.67$.",
    solution: "1. Marginal probability: $P(Y = 2) = P(X=1, Y=2) + P(X=2, Y=2) = 0.2 + 0.4 = 0.6$.\n2. Conditional probabilities: $P(X = 1 \\mid Y = 2) = \\frac{0.2}{0.6} = \\frac{1}{3}$, $P(X = 2 \\mid Y = 2) = \\frac{0.4}{0.6} = \\frac{2}{3}$.\n3. Conditional expectation: $E[X \\mid Y = 2] = 1 \\left(\\frac{1}{3}\\right) + 2 \\left(\\frac{2}{3}\\right) = \\frac{1 + 4}{3} = \\frac{5}{3} \\approx 1.67$."
  },
  {
    id: "PROB-L-18",
    subtopic: "Correlation & Independence",
    source: "GATE CS 2017",
    marks: 1,
    type: "MCQ",
    statement: "If two random variables $X$ and $Y$ are independent, then:",
    options: [
      "(A) $\\text{Cov}(X, Y) = 0$ and $\\rho(X, Y) = 0$",
      "(B) $\\text{Var}(X + Y) = \\text{Var}(X) \\cdot \\text{Var}(Y)$",
      "(C) $E[X Y] = E[X] + E[Y]$",
      "(D) $X$ and $Y$ must follow normal distributions"
    ],
    answer: "Option A",
    shortcut: "Independence strictly implies uncorrelatedness: $\\text{Cov}(X, Y) = 0$. (The converse is NOT always true!).",
    solution: "When $X$ and $Y$ are independent, $E[X Y] = E[X] E[Y]$. Therefore $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0$. Since $\\text{Cov}(X, Y) = 0$, the correlation coefficient $\\rho(X, Y) = 0$ as well."
  },
  {
    id: "PROB-L-19",
    subtopic: "Linearity of Expectation",
    source: "GATE CS 2014",
    marks: 1,
    type: "MCQ",
    statement: "The identity $E[X + Y] = E[X] + E[Y]$ holds:",
    options: [
      "(A) For any random variables $X$ and $Y$, whether dependent or independent.",
      "(B) Only when $X$ and $Y$ are independent.",
      "(C) Only when $X$ and $Y$ are identically distributed.",
      "(D) Only when $X$ and $Y$ are normally distributed."
    ],
    answer: "Option A",
    shortcut: "Linearity of expectation requires NO assumptions on independence!",
    solution: "Expectation is an integral (or summation) operator. Because the integral of a sum equals the sum of integrals, linearity of expectation $E[aX + bY] = a E[X] + b E[Y]$ always holds universally, even if $X$ and $Y$ are completely correlated."
  },
  {
    id: "PROB-L-20",
    subtopic: "Correlation Bounds",
    source: "GATE DA 2024",
    marks: 1,
    type: "MCQ",
    statement: "The Pearson correlation coefficient $\\rho(X, Y)$ between any two non-degenerate random variables is strictly bounded within:",
    options: ["(A) $[0, 1]$", "(B) $[-1, 1]$", "(C) $(-\\infty, \\infty)$", "(D) $[-0.5, 0.5]$"],
    answer: "Option B ($[-1, 1]$)",
    shortcut: "Cauchy-Schwarz inequality: $(\\text{Cov}(X, Y))^2 \\le \\text{Var}(X) \\text{Var}(Y) \\implies |\\rho| \\le 1$.",
    solution: "By the Cauchy-Schwarz inequality applied to random variables $(X - \\mu_X)$ and $(Y - \\mu_Y)$: $|\\text{Cov}(X, Y)| \\le \\sigma_X \\sigma_Y \\implies -1 \\le \\rho(X, Y) \\le 1$. $\\rho = 1$ indicates perfect positive linear relationship, and $\\rho = -1$ indicates perfect negative linear relationship."
  },

  // --- SUBTOPIC 5: Central Limit Theorem & Inferential Statistics (21-50) ---
  {
    id: "PROB-L-21",
    subtopic: "Central Limit Theorem",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "A random sample of size $n = 64$ is drawn from an arbitrary population with unknown mean $\mu$ and known standard deviation $\\sigma = 16$. By the Central Limit Theorem, the standard error of the sample mean $\\bar{X}$ is:",
    options: ["(A) 16", "(B) 4", "(C) 2", "(D) 0.25"],
    answer: "Option C (2)",
    shortcut: "Standard error formula: $SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}} = \\frac{16}{\\sqrt{64}} = \\frac{16}{8} = 2$.",
    solution: "The Central Limit Theorem guarantees that for large sample sizes ($n \\ge 30$), the sampling distribution of the sample mean $\\bar{X}$ approaches a normal distribution with mean $\\mu$ and standard error $SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}} = \\frac{16}{\\sqrt{64}} = 2$."
  },
  {
    id: "PROB-L-22",
    subtopic: "Confidence Intervals",
    source: "GATE DA 2024",
    marks: 2,
    type: "NAT",
    statement: "A random sample of size $n = 100$ has a sample mean $\\bar{x} = 50$. The population standard deviation is known to be $\\sigma = 10$. Using $z_{0.025} = 1.96$, the upper bound of the $95\\%$ confidence interval for the population mean $\\mu$ is ________ (round to 2 decimal places).",
    options: [],
    answer: "51.96",
    shortcut: "Upper bound $= \\bar{x} + z \\frac{\\sigma}{\\sqrt{n}} = 50 + 1.96 \\left(\\frac{10}{\\sqrt{100}}\\right) = 50 + 1.96(1) = 51.96$.",
    solution: "The $95\\%$ confidence interval for the population mean with known $\\sigma$ is:\n$$\\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} = 50 \\pm 1.96 \\left(\\frac{10}{\\sqrt{100}}\\right) = 50 \\pm 1.96(1) = [48.04, 51.96]$$\nThe upper bound is $51.96$."
  },
  {
    id: "PROB-L-23",
    subtopic: "Hypothesis Testing",
    source: "GATE DA 2024",
    marks: 2,
    type: "MSQ",
    statement: "In statistical hypothesis testing, which of the following statements is/are <strong>TRUE</strong>?",
    options: [
      "(A) Type I error ($\\alpha$) occurs when the null hypothesis $H_0$ is rejected when it is actually true.",
      "(B) Type II error ($\\beta$) occurs when $H_0$ is not rejected when it is actually false.",
      "(C) The Power of the test is defined as $1 - \\beta$.",
      "(D) If the $p$-value is less than the significance level $\\alpha$, we fail to reject $H_0$."
    ],
    answer: "Options A, B, C",
    shortcut: "Option D is false: When $p \\le \\alpha$, the evidence against $H_0$ is strong, so we REJECT $H_0$!",
    solution: "1. Type I error $\\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ is true})$ (False Alarm). Option A is true.\n2. Type II error $\\beta = P(\\text{Fail to reject } H_0 \\mid H_0 \\text{ is false})$ (Miss). Option B is true.\n3. Statistical Power $= 1 - \\beta = P(\\text{Reject } H_0 \\mid H_0 \\text{ is false})$. Option C is true.\n4. Decision rule: Reject $H_0$ if $p\\text{-value} \\le \\alpha$. Option D incorrectly states 'fail to reject'."
  },
  {
    id: "PROB-L-24",
    subtopic: "Hypothesis Testing (t-test)",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "When testing hypotheses about a population mean with a small sample ($n < 30$) and <strong>unknown</strong> population variance $\\sigma^2$, which test statistic should be used?",
    options: [
      "(A) Student's $t$-test with $n - 1$ degrees of freedom",
      "(B) Standard normal $z$-test",
      "(C) Chi-squared test with $n$ degrees of freedom",
      "(D) $F$-test with $(n, 1)$ degrees of freedom"
    ],
    answer: "Option A",
    shortcut: "Small sample ($n < 30$) + Unknown $\\sigma \\implies$ Student's $t$-distribution with $df = n - 1$.",
    solution: "When the population variance is unknown, we estimate it using the sample variance $S^2 = \\frac{1}{n-1} \\sum (X_i - \\bar{X})^2$. The quantity $t = \\frac{\\bar{X} - \\mu}{S / \\sqrt{n}}$ follows Student's $t$-distribution with $\\nu = n - 1$ degrees of freedom."
  },
  {
    id: "PROB-L-25",
    subtopic: "Chi-Squared Test",
    source: "GATE DA 2024",
    marks: 2,
    type: "NAT",
    statement: "In a Chi-squared goodness-of-fit test with $k = 6$ categories and no estimated parameters, what are the degrees of freedom for the $\\chi^2$ statistic?",
    options: [],
    answer: "5",
    shortcut: "Formula: $\\text{Degrees of Freedom} = k - 1 = 6 - 1 = 5$.",
    solution: "For a Chi-squared goodness-of-fit test with $k$ discrete categories, because the total observed frequencies sum to the total sample size $\\sum O_i = n$, one degree of freedom is lost to the constraint. Hence $df = k - 1 = 6 - 1 = 5$."
  }
];

// --- 50 PRACTICE PROBLEMS FOR PROBABILITY & STATISTICS ---
const module2_practice_problems = [
  {
    id: "PROB-P-01",
    subtopic: "Bayes' Theorem",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "Urn A contains 3 red and 2 blue balls. Urn B contains 1 red and 4 blue balls. An urn is selected with equal probability and a ball drawn is red. What is the probability that Urn A was chosen? (round to 2 decimal places)",
    hint: "Use Bayes' theorem: $P(A|R) = \\frac{P(R|A)P(A)}{P(R|A)P(A) + P(R|B)P(B)}$.",
    final_answer: "0.75",
    explanation: "$P(R|A) = 3/5, P(R|B) = 1/5$. $P(A|R) = \\frac{(3/5)(1/2)}{(3/5)(1/2) + (1/5)(1/2)} = \\frac{3}{3 + 1} = 0.75$."
  },
  {
    id: "PROB-P-02",
    subtopic: "Poisson",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "If $X \\sim \\text{Poisson}(\\lambda = 3)$, what is the ratio $\\frac{P(X = 3)}{P(X = 2)}$?",
    hint: "Use $P(X=k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$. Notice $P(X=k)/P(X=k-1) = \\lambda / k$.",
    final_answer: "1",
    explanation: "$\\frac{P(X=3)}{P(X=2)} = \\frac{e^{-3} 3^3 / 6}{e^{-3} 3^2 / 2} = \\frac{27/6}{9/2} = \\frac{4.5}{4.5} = 1$."
  },
  {
    id: "PROB-P-03",
    subtopic: "Binomial",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "For $X \\sim \\text{Binomial}(n = 16, p = 0.25)$, what is the variance $\\text{Var}(X)$?",
    hint: "$\\text{Var}(X) = n p (1 - p)$.",
    final_answer: "3",
    explanation: "$\\text{Var}(X) = 16 \\times 0.25 \\times 0.75 = 4 \\times 0.75 = 3$."
  },
  {
    id: "PROB-P-04",
    subtopic: "Normal Distribution",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "If $Z \\sim \\mathcal{N}(0, 1)$, what is $P(Z \\le 0)$?",
    hint: "Standard normal distribution is perfectly symmetric around 0.",
    final_answer: "0.5",
    explanation: "By symmetry of standard normal distribution around the mean 0, $P(Z \\le 0) = 0.5$."
  },
  {
    id: "PROB-P-05",
    subtopic: "Uniform Distribution",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "Let $X \\sim \\text{Uniform}(0, 10)$. What is $P(2 \\le X \\le 7)$?",
    hint: "For uniform distribution, probability is $\\frac{\\text{length of subinterval}}{\\text{total length}}$.",
    final_answer: "0.5",
    explanation: "$P(2 \\le X \\le 7) = \\frac{7 - 2}{10 - 0} = \\frac{5}{10} = 0.5$."
  },
  {
    id: "PROB-P-06",
    subtopic: "Hypothesis Testing",
    source: "GATE DA Practice",
    marks: 1,
    type: "MCQ",
    statement: "If the $p$-value of a hypothesis test is 0.012 and the significance level is $\\alpha = 0.05$, the decision is to:",
    options: ["(A) Reject $H_0$", "(B) Fail to reject $H_0$", "(C) Accept $H_0$", "(D) Retest with larger sample"],
    hint: "Compare $p$-value with $\\alpha$. Since $0.012 < 0.05$...",
    final_answer: "Option A (Reject $H_0$)",
    explanation: "When $p\\text{-value} \\le \\alpha$, we reject the null hypothesis $H_0$ at the $5\\%$ significance level."
  },
  {
    id: "PROB-P-07",
    subtopic: "CLT",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "If sample size $n$ increases by a factor of 4, by what factor does the standard error of the mean decrease?",
    hint: "$SE = \\sigma / \\sqrt{n}$. Calculate $\\sqrt{4}$.",
    final_answer: "2",
    explanation: "Since $SE \\propto 1/\\sqrt{n}$, multiplying $n$ by 4 divides $SE$ by $\\sqrt{4} = 2$."
  },
  {
    id: "PROB-P-08",
    subtopic: "Covariance",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "If $Y = -3X + 5$, what is the Pearson correlation coefficient $\\rho(X, Y)$?",
    hint: "A perfect negative linear relationship gives $\\rho = -1$.",
    final_answer: "-1",
    explanation: "Because $Y$ is an exact linear function of $X$ with a negative slope (-3), $\\rho(X, Y) = -1$."
  },
  {
    id: "PROB-P-09",
    subtopic: "Independent Events",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "If $P(A) = 0.3$ and $P(B) = 0.4$ for independent events $A$ and $B$, what is $P(A \\cap B)$?",
    hint: "$P(A \\cap B) = P(A) \\times P(B)$.",
    final_answer: "0.12",
    explanation: "$P(A \\cap B) = 0.3 \\times 0.4 = 0.12$."
  },
  {
    id: "PROB-P-10",
    subtopic: "Exponential Distribution",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "For $X \\sim \\text{Exponential}(\\lambda = 2)$, what is the variance $\\text{Var}(X)$?",
    hint: "Variance of Exponential distribution is $1/\\lambda^2$.",
    final_answer: "0.25",
    explanation: "$\\text{Var}(X) = \\frac{1}{\\lambda^2} = \\frac{1}{2^2} = \\frac{1}{4} = 0.25$."
  }
];
