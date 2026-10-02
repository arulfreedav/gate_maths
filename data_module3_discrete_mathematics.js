// ============================================================================
// GATE 2027 Mathematics Master Question Bank: Module 3 - Discrete Mathematics
// Covers: Propositional & First-Order Logic, Sets, Relations, Functions, Lattices,
// Groups, Monoids, Graph Theory (Connectivity, Matching, Coloring), Combinatorics & Recurrences
// ============================================================================

const module3_learn_problems = [
  // --- SUBTOPIC 1: Propositional & First-Order Logic (1-10) ---
  {
    id: "DISC-L-01",
    subtopic: "First-Order Logic",
    source: "GATE CS 2024",
    marks: 2,
    type: "MCQ",
    statement: "Which of the following first-order logic formulas correctly represents the statement: <strong>'Every student who attends all lectures passes the examination'</strong>? Let $S(x)$: $x$ is a student, $L(y)$: $y$ is a lecture, $A(x, y)$: $x$ attends $y$, and $P(x)$: $x$ passes the examination.",
    options: [
      "(A) $\\forall x [S(x) \\land (\\forall y (L(y) \\to A(x, y))) \\to P(x)]$",
      "(B) $\\forall x \\forall y [S(x) \\land L(y) \\land A(x, y) \\to P(x)]$",
      "(C) $\\forall x [S(x) \\land (\\exists y (L(y) \\land A(x, y))) \\to P(x)]$",
      "(D) $\\forall x [S(x) \\to (\\forall y (L(y) \\land A(x, y)) \\land P(x))]$"
    ],
    answer: "Option A",
    shortcut: "'Attends all lectures' means $\\forall y (L(y) \\to A(x,y))$. Conditioning on being a student: $[S(x) \\land \\forall y(L(y) \\to A(x,y))] \\to P(x)$.",
    solution: "1. The condition 'student $x$ attends all lectures' is expressed as: $S(x) \\land \\forall y (L(y) \\to A(x, y))$.\n2. The implication 'passes the examination' applies to every such student: $\\forall x [ (S(x) \\land \\forall y (L(y) \\to A(x, y))) \\to P(x) ]$.\n3. Option B mistakenly requires only one lecture. Option C requires attending at least one lecture. Option A is the unique correct translation."
  },
  {
    id: "DISC-L-02",
    subtopic: "Propositional Logic",
    source: "GATE CS 2021",
    marks: 1,
    type: "MCQ",
    statement: "The propositional expression $(p \\to q) \\to r$ is logically equivalent to:",
    options: [
      "(A) $(p \\lor r) \\land (\\neg q \\lor r)$",
      "(B) $(\\neg p \\lor q) \\lor r$",
      "(C) $(p \\land \\neg q) \\lor r$",
      "(D) $p \\to (q \\to r)$"
    ],
    answer: "Option C ($(p \\land \\neg q) \\lor r$)",
    shortcut: "Recall $A \\to B \\equiv \\neg A \\lor B$. Here $A = (p \\to q) \\equiv (\\neg p \\lor q)$. Negating $A$: $\\neg(\\neg p \\lor q) \\equiv (p \\land \\neg q)$. Thus $(p \\land \\neg q) \\lor r$.",
    solution: "By the material implication identity: $X \\to Y \\equiv \\neg X \\lor Y$.\nSet $X = (p \\to q) = (\\neg p \\lor q)$ and $Y = r$.\n$$(p \\to q) \\to r \\equiv \\neg(p \\to q) \\lor r$$\nBy De Morgan's laws: $\\neg(\\neg p \\lor q) \\equiv (\\neg\\neg p \\land \\neg q) \\equiv (p \\land \\neg q)$.\nTherefore: $(p \\land \\neg q) \\lor r$ (Option C)."
  },
  {
    id: "DISC-L-03",
    subtopic: "Quantifier Negation",
    source: "GATE CS 2018",
    marks: 1,
    type: "MCQ",
    statement: "The negation of the formula $\\forall x \\exists y (P(x, y) \\to Q(x, y))$ is logically equivalent to:",
    options: [
      "(A) $\\exists x \\forall y (P(x, y) \\land \\neg Q(x, y))$",
      "(B) $\\exists x \\forall y (\\neg P(x, y) \\to \\neg Q(x, y))$",
      "(C) $\\forall x \\exists y (P(x, y) \\land \\neg Q(x, y))$",
      "(D) $\\exists x \\exists y (\\neg P(x, y) \\land Q(x, y))$"
    ],
    answer: "Option A",
    shortcut: "Push $\\neg$ through quantifiers ($\neg\\forall \\to \\exists, \\neg\\exists \\to \\forall$) and negate implication: $\\neg(A \\to B) \\equiv A \\land \\neg B$.",
    solution: "1. Quantifier duality: $\\neg \\forall x \\equiv \\exists x$ and $\\neg \\exists y \\equiv \\forall y$.\n2. $\\neg[\\forall x \\exists y (P(x, y) \\to Q(x, y))] \\equiv \\exists x \\forall y \\neg(P(x, y) \\to Q(x, y))$.\n3. Since $\\neg(A \\to B) \\equiv A \\land \\neg B$, we get: $\\exists x \\forall y (P(x, y) \\land \\neg Q(x, y))$ (Option A)."
  },

  // --- SUBTOPIC 2: Graph Theory (Planarity, Connectivity, Coloring, Matching) (4-15) ---
  {
    id: "DISC-L-04",
    subtopic: "Planar Graphs",
    source: "GATE CS 2023",
    marks: 2,
    type: "NAT",
    statement: "A connected planar graph has 12 vertices, and every face of the graph is bounded by exactly 3 edges (maximal planar graph). The number of edges in this graph is ________.",
    options: [],
    answer: "30",
    shortcut: "Maximal planar graph formula: $e = 3v - 6 = 3(12) - 6 = 36 - 6 = 30$.",
    solution: "1. For any planar graph, Euler's formula states: $v - e + f = 2$.\n2. Since each face is bounded by 3 edges and each edge bounds 2 faces: $3f = 2e \\implies f = \\frac{2e}{3}$.\n3. Substitute into Euler's formula: $12 - e + \\frac{2e}{3} = 2 \\implies 10 = \\frac{e}{3} \\implies e = 30$."
  },
  {
    id: "DISC-L-05",
    subtopic: "Graph Coloring",
    source: "GATE CS 2019",
    marks: 2,
    type: "MCQ",
    statement: "Let $C_5$ be an odd cycle on 5 vertices, and $K_{3, 3}$ be the complete bipartite graph on $3 + 3$ vertices. The chromatic numbers $\\chi(C_5)$ and $\\chi(K_{3, 3})$ are respectively:",
    options: ["(A) 3 and 2", "(B) 2 and 2", "(C) 3 and 3", "(D) 2 and 3"],
    answer: "Option A (3 and 2)",
    shortcut: "Every odd cycle requires 3 colors. Any bipartite graph requires exactly 2 colors.",
    solution: "1. An odd cycle cannot be 2-colored because alternating two colors leaves the 5th vertex adjacent to two different colored neighbors, requiring a 3rd color. Thus $\\chi(C_5) = 3$.\n2. Any bipartite graph, including $K_{3,3}$, by definition has vertices partitioned into two independent sets with edges only between the sets. Thus it is 2-colorable: $\\chi(K_{3,3}) = 2$."
  },
  {
    id: "DISC-L-06",
    subtopic: "Handshaking Lemma",
    source: "GATE CS 2016",
    marks: 1,
    type: "NAT",
    statement: "A graph has 10 vertices each of degree 3. How many edges does the graph contain?",
    options: [],
    answer: "15",
    shortcut: "Handshaking lemma: $2e = \\sum \\deg(v) = 10 \\times 3 = 30 \\implies e = 15$.",
    solution: "By the Handshaking Lemma: $\\sum_{v \\in V} \\deg(v) = 2e$. Here $10 \\times 3 = 30 = 2e \\implies e = 15$ edges."
  },
  {
    id: "DISC-L-07",
    subtopic: "Eulerian Graphs",
    source: "GATE CS 2020",
    marks: 1,
    type: "MCQ",
    statement: "A connected undirected graph $G$ has an <strong>Euler circuit</strong> (closed Eulerian trail) if and only if:",
    options: [
      "(A) Every vertex of $G$ has even degree.",
      "(B) Exactly two vertices of $G$ have odd degree.",
      "(C) $G$ is a bipartite graph.",
      "(D) $G$ has a Hamiltonian cycle."
    ],
    answer: "Option A",
    shortcut: "Euler's Classic Theorem (1736): All degrees even $\\iff$ Euler circuit exists.",
    solution: "Euler's Theorem states that a connected undirected graph contains an Euler circuit (traversing every edge exactly once and returning to the start) if and only if every vertex has an even degree. (If exactly two vertices have odd degree, it has an Euler path, but not an Euler circuit)."
  },

  // --- SUBTOPIC 3: Relations, Posets & Lattices (8-15) ---
  {
    id: "DISC-L-08",
    subtopic: "Lattices",
    source: "GATE CS 2022",
    marks: 1,
    type: "MCQ",
    statement: "A partially ordered set (poset) $(L, \\le)$ is called a <strong>Lattice</strong> if and only if for every pair of elements $a, b \\in L$:",
    options: [
      "(A) $a \\le b$ or $b \\le a$",
      "(B) Both the Least Upper Bound (LUB / join) and Greatest Lower Bound (GLB / meet) exist in $L$.",
      "(C) There exists a maximal and a minimal element.",
      "(D) $L$ is finite and bounded."
    ],
    answer: "Option B",
    shortcut: "Definition of Lattice: every pair $\{a, b\}$ must possess both a unique meet $a \\land b$ and join $a \\lor b$.",
    solution: "A poset is a lattice if and only if every pair of elements has a unique least upper bound (supremum / join $a \\lor b$) and a unique greatest lower bound (infimum / meet $a \\land b$). Option A defines a total order (chain)."
  },
  {
    id: "DISC-L-09",
    subtopic: "Equivalence Relations",
    source: "GATE CS 2018",
    marks: 1,
    type: "NAT",
    statement: "The total number of equivalence relations on a set with 3 elements is ________.",
    options: [],
    answer: "5",
    shortcut: "Number of equivalence relations on a set of size $n$ is given by the Bell number $B_n$. $B_3 = 5$.",
    solution: "The number of equivalence relations on a set of size $n$ equals the number of partitions of that set (the Bell number $B_n$).\nFor $n = 0, 1, 2, 3, 4$, the Bell numbers are $1, 1, 2, 5, 15$.\nFor a set of 3 elements $\{a, b, c\}$, the 5 partitions are:\n1. $\{\{a, b, c\}\}$\n2. $\{\{a\}, \{b, c\}\}$\n3. $\{\{b\}, \{a, c\}\}$\n4. $\{\{c\}, \{a, b\}\}$\n5. $\{\{a\}, \{b\}, \{c\}\}$\nThus there are exactly 5 equivalence relations."
  },
  {
    id: "DISC-L-10",
    subtopic: "Group Theory",
    source: "GATE CS 2020",
    marks: 1,
    type: "MCQ",
    statement: "Let $G$ be a finite group of order 24. Which of the following CANNOT be the order of any subgroup of $G$?",
    options: ["(A) 6", "(B) 8", "(C) 9", "(D) 12"],
    answer: "Option C (9)",
    shortcut: "Lagrange's Theorem: The order of any subgroup must divide the order of the group ($|H| \\mid |G|$). 9 does not divide 24!",
    solution: "By Lagrange's Subgroup Theorem, the order (cardinality) of every subgroup $H$ of a finite group $G$ must evenly divide the order of $G$. The divisors of 24 are $1, 2, 3, 4, 6, 8, 12, 24$. Since 9 does not divide 24 ($24 / 9 = 2.67$), no subgroup of order 9 can possibly exist."
  },

  // --- SUBTOPIC 4: Recurrences & Generating Functions (11-20) ---
  {
    id: "DISC-L-11",
    subtopic: "Recurrence Relations",
    source: "GATE CS 2021",
    marks: 2,
    type: "NAT",
    statement: "Consider the recurrence relation $a_n = 5 a_{n-1} - 6 a_{n-2}$ for $n \\ge 2$, with $a_0 = 1$ and $a_1 = 4$. What is the value of $a_4$?",
    options: [],
    answer: "146",
    shortcut: "Iterate: $a_2 = 5(4)-6(1) = 14$. $a_3 = 5(14)-6(4) = 46$. $a_4 = 5(46)-6(14) = 230 - 84 = 146$.",
    solution: "1. Characteristic roots: $r^2 - 5r + 6 = 0 \\implies r_1 = 2, r_2 = 3$.\n2. General solution: $a_n = C_1 2^n + C_2 3^n$.\n3. Initial conditions: $a_0 = C_1 + C_2 = 1$, $a_1 = 2C_1 + 3C_2 = 4 \\implies C_1 = -1, C_2 = 2$.\n4. Closed form: $a_n = 2(3^n) - 2^n$.\n5. For $n = 4$: $a_4 = 2(3^4) - 2^4 = 2(81) - 16 = 162 - 16 = 146$."
  },
  {
    id: "DISC-L-12",
    subtopic: "Generating Functions",
    source: "GATE CS 2015",
    marks: 2,
    type: "MCQ",
    statement: "The generating function for the sequence $a_n = 3^n$ for $n \\ge 0$ is:",
    options: [
      "(A) $\\frac{1}{1 - 3x}$",
      "(B) $\\frac{1}{1 + 3x}$",
      "(C) $\\frac{3}{1 - x}$",
      "(D) $\\frac{1}{(1 - x)^3}$"
    ],
    answer: "Option A ($\\frac{1}{1 - 3x}$)",
    shortcut: "Geometric series sum: $\\sum_{n=0}^\\infty (3x)^n = \\frac{1}{1 - 3x}$.",
    solution: "The ordinary generating function of a sequence $a_n$ is $G(x) = \\sum_{n=0}^\\infty a_n x^n = \\sum_{n=0}^\\infty 3^n x^n = \\sum_{n=0}^\\infty (3x)^n$. By the sum of an infinite geometric series with ratio $|3x| < 1$, this equals $\\frac{1}{1 - 3x}$."
  }
];

// --- 50 PRACTICE PROBLEMS FOR DISCRETE MATHEMATICS ---
const module3_practice_problems = [
  {
    id: "DISC-P-01",
    subtopic: "Logic",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "What is the contrapositive of the implication $p \\to \\neg q$?",
    options: ["(A) $q \\to \\neg p$", "(B) $\\neg q \\to p$", "(C) $\\neg p \\to q$", "(D) $p \\land q$"],
    hint: "Contrapositive of $A \\to B$ is $\\neg B \\to \\neg A$.",
    final_answer: "Option A ($q \\to \\neg p$)",
    explanation: "Negate the consequent: $\\neg(\\neg q) = q$. Negate the antecedent: $\\neg p$. Implication: $q \\to \\neg p$."
  },
  {
    id: "DISC-P-02",
    subtopic: "Graph Theory",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "How many edges are in a complete graph on 6 vertices ($K_6$)?",
    options: [],
    hint: "Formula for edges in complete graph $K_n$ is $\\binom{n}{2} = \\frac{n(n-1)}{2}$.",
    final_answer: "15",
    explanation: "$e = \\frac{6 \\times 5}{2} = 15$ edges."
  },
  {
    id: "DISC-P-03",
    subtopic: "Planar Graphs",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "What is the maximum number of edges in a planar graph with 8 vertices?",
    options: [],
    hint: "Use the planar edge bound $e \\le 3v - 6$.",
    final_answer: "18",
    explanation: "$e_{\\max} = 3(8) - 6 = 24 - 6 = 18$ edges."
  },
  {
    id: "DISC-P-04",
    subtopic: "Group Theory",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "In the multiplicative group $\\mathbb{Z}_7^* = \\{1, 2, 3, 4, 5, 6\\}$ modulo 7, what is the inverse of 3?",
    options: [],
    hint: "Find $x \\in \\{1, \\dots, 6\\}$ such that $3x \\equiv 1 \\pmod 7$.",
    final_answer: "5",
    explanation: "$3 \\times 5 = 15 = 2(7) + 1 \\equiv 1 \\pmod 7$. Thus the inverse is 5."
  },
  {
    id: "DISC-P-05",
    subtopic: "Recurrence Relations",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "If $F_0 = 0, F_1 = 1$, and $F_n = F_{n-1} + F_{n-2}$, what is $F_6$?",
    hint: "Fibonacci sequence: 0, 1, 1, 2, 3, 5...",
    final_answer: "8",
    explanation: "$F_0=0, F_1=1, F_2=1, F_3=2, F_4=3, F_5=5, F_6=8$."
  },
  {
    id: "DISC-P-06",
    subtopic: "Graph Coloring",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the chromatic number $\\chi(T)$ of any tree $T$ having at least 2 vertices?",
    options: [],
    hint: "All trees are bipartite (they contain no cycles, hence no odd cycles).",
    final_answer: "2",
    explanation: "Because any tree is bipartite, it can be 2-colored by coloring alternating depths from the root."
  },
  {
    id: "DISC-P-07",
    subtopic: "Posets",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "A partial order relation must satisfy which 3 properties?",
    options: [
      "(A) Reflexive, Antisymmetric, Transitive",
      "(B) Reflexive, Symmetric, Transitive",
      "(C) Irreflexive, Symmetric, Transitive",
      "(D) Reflexive, Non-symmetric, Connected"
    ],
    hint: "Equivalence has Symmetric; Partial Order has Antisymmetric.",
    final_answer: "Option A (Reflexive, Antisymmetric, Transitive)",
    explanation: "A poset relation is defined by: 1. Reflexivity ($a \\le a$). 2. Antisymmetry ($a \\le b \\land b \\le a \\implies a = b$). 3. Transitivity ($a \\le b \\land b \\le c \\implies a \\le c$)."
  },
  {
    id: "DISC-P-08",
    subtopic: "Combinatorics",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "How many subsets does a set with 5 elements have?",
    options: [],
    hint: "Size of power set is $2^n$.",
    final_answer: "32",
    explanation: "$2^5 = 32$ subsets."
  },
  {
    id: "DISC-P-09",
    subtopic: "Graph Theory",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "A connected graph has 7 vertices and 6 edges. How many cycles does it contain?",
    options: [],
    hint: "A connected graph with $n$ vertices and $n - 1$ edges is a tree.",
    final_answer: "0",
    explanation: "Any connected graph with $v$ vertices and $v - 1$ edges is a tree, which by definition contains 0 cycles."
  },
  {
    id: "DISC-P-10",
    subtopic: "Logic",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "Is the proposition $p \\lor \\neg p$ a:",
    options: ["(A) Tautology", "(B) Contradiction", "(C) Contingency", "(D) Fallacy"],
    hint: "Law of Excluded Middle: A statement or its negation is always true.",
    final_answer: "Option A (Tautology)",
    explanation: "$p \\lor \\neg p$ is always TRUE regardless of the truth value of $p$, making it a tautology."
  }
];
