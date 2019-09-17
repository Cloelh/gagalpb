let monument1 =
    {
        _uid: 1,
        latitude :51.75924850,
        longitude :19.45598330,
        name: "Le monument 1",
        image: "images/monument1.jpg",
        easy: {
            question: "Easy Question",
            answers: ["Answer 1", "Answer 2", "Answer 3"],
            solution : 0, // Answer 1
        },
        medium: {
            question: "Medium Question",
            answers: ["Answer 1", "Answer 2", "Answer 3"],
            solution : 1, // Answer 2
        },
        hard: {
            question: "Hard Question",
            answers: ["Answer 1", "Answer 2", "Answer 3"],
            solution : 2, // Answer 3....
        },
    }

let monument2 =
    {
        _uid: 2,
        latitude :2,
        longitude :3,
        name: "Le monument 2",
        image: "images/monument1.jpg",
        easy: {
            question: "Easy Question",
            answers: ["Answer 1", "Answer 2", "Answer 3"],
            solution : 0, // Answer 1
        },
        medium: {
            question: "Medium Question",
            answers: ["Answer 1", "Answer 2", "Answer 3"],
            solution : 1, // Answer 2
        },
        hard: {
            question: "Hard Question",
            answers: ["Answer 1", "Answer 2", "Answer 3"],
            solution : 2, // Answer 3....
        },
    }



let monuments = [monument1, monument2];
export {
    monuments
};
