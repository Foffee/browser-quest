interface Pair<T, U> {
    first: T;
    second: U;
}

interface WordCount {
    word: string;
    count: number;
}

interface MarkovNode<T> {
    currentState: T;
    nextStates: Pair<MarkovNode<T>, number>[];
}

class MarkovChain<T> {
    private root: MarkovNode<T> | null;  
    private current: MarkovNode<T> | null;

    constructor(initial: MarkovNode<T>) {
        this.root = initial;
        this.current = initial;
    }

    get(): T | null {
        return this.current?.currentState || null;
    }

    next(): void {
        if (!this.current) return;

        let runningTotal = 0;
        const rand = Math.random();

        for (const next of this.current.nextStates) {
            runningTotal += next.second;
            if (runningTotal > rand) {
                this.current = next.first;
                return;
            }
        }

        this.current = null;
    }

    reset(): void {
        this.current = this.root;
    }
}

const find = <T>(arr: T[], search: (x: T) => boolean): T | null => {
    for (const el of arr) if (search(el)) return el;
    return null;
};

const texts = [
    `
    
    `
];

const NUM_PRECEDING = 5;
const wordMap = new Map<string, WordCount[]>();
const wordNodes = new Map<string, MarkovNode<string>>();

for (const text of texts) {
    const words = text.split(/\s+/).filter(Boolean);

    for (let i = NUM_PRECEDING; i < words.length; i++) {
        const precedingWords = words.slice(i - NUM_PRECEDING, i).join(' ').trim();
        const nextWord = words[i];

        const existingEntry = wordMap.get(precedingWords);

        if (existingEntry) {
            const existingNext = find(existingEntry, wordCount => wordCount.word === nextWord);
            if (existingNext) {
                existingNext.count++;
            } else {
                existingEntry.push({ word: nextWord, count: 1 });
            }
        } else {
            wordMap.set(precedingWords, [{ word: nextWord, count: 1 }]);
        }
    }
}

for (const [precedingWords, wordCounts] of wordMap.entries()) {
    const totalCount = wordCounts.reduce((acc, cur) => acc + cur.count, 0);
    const currentNode: MarkovNode<string> = {
        currentState: precedingWords,
        nextStates: []
    };

    for (const { word, count } of wordCounts) {
        const newWord = precedingWords.split(' ').slice(1).concat(word).join(' ');
        let nextNode = wordNodes.get(newWord);
        if (!nextNode) {
            nextNode = { currentState: newWord, nextStates: [] };
            wordNodes.set(newWord, nextNode);
        }
        currentNode.nextStates.push({ first: nextNode, second: count / totalCount });
    }

    wordNodes.set(precedingWords, currentNode);
}

const startingWords = texts[Math.floor(Math.random() * texts.length)]
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, NUM_PRECEDING)
    .join(' ');

const startingNode = wordNodes.get(startingWords);

if (startingNode) {
    const MC = new MarkovChain(startingNode);
    let trials = 5000;
    let genText = startingWords;

    while (trials-- > 0) {
        MC.next();
        const nextWord = MC.get();
        if (!nextWord) break;
        genText += ' ' + nextWord.split(' ').pop();
    }

    while (genText[genText.length - 1] !== '.' && trials-- > 0) {
        MC.next();
        const nextWord = MC.get();
        if (!nextWord) break;
        genText += ' ' + nextWord.split(' ').pop();
    }

    console.log(genText);
}