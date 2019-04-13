"use strict";

//Hold current year
const year = new Date().getFullYear();
current_year.innerText = year;

//Hold list of all students
const students = [
    {
        "name": "Surafel Nigussie Asfaw (986860)",
        "url": "https://github.com/surafel-nigussie-asfaw/cs572"
    },
    {
        "name": "Javkhlan Batsaikhan (986950)",
        "url": "https://github.com/bjavkhlan/cs572"
    },
    {
        "name": "Edwin Gregorio Bernal Duran (986924)",
        "url": "https://github.com/edwingbd/cs572"
    },
    {
        "name": "Ali Tugrul Cebe (986721)",
        "url": "https://github.com/alitugrulcebe/cs572"
    },
    {
        "name": "Vorleak Chy (986890)",
        "url": "https://github.com/vorleakchy/cs572"
    },
    {
        "name": "Halison Da Silva Brito (986997)",
        "url": "https://github.com/halisonbrito/cs572"
    },
    {
        "name": "Ariuntungalag Davaanyam (986816)",
        "url": "https://github.com/Ariunjin/CS572"
    },
    {
        "name": "Chinmoy Kanti Dhar (983926)",
        "url": "https://github.com/chinmoy/mwa"
    },
    {
        "name": "Ochtulga Ganbat (986201)",
        "url": "https://github.com/tenhu/cs572"
    },
    {
        "name": "Battuguldur Ganbold (986874)",
        "url": "https://github.com/gtuugii/MWA_labs"
    },
    {
        "name": "Tsogzolmaa Ganbold (986592)",
        "url": "https://github.com/TGanbold/CS572"
    },
    {
        "name": "Alaa Hassanein Ali Hassanein (986923)",
        "url": "https://github.com/alaahassaneinali/cs572"
    },
    {
        "name": "Tacettin Umur Inan (986814)",
        "url": "https://github.com/umurinanmum/CS572"
    },
    {
        "name": "Munkhzul Khurelbaatar (986906)",
        "url": "https://github.com/zula1010/cs572"
    },
    {
        "name": "Youssef Fayez Fouad Louka (986804)",
        "url": "https://github.com/Youssef93/cs572"
    },
    {
        "name": "Tomas Habteslasie Melake (109334)",
        "url": "https://github.com/tomsgith/CS572-MWA-"
    },
    {
        "name": "Elsabeth Melaku (109041)",
        "url": "https://github.com/Elsabeth7/MWA"
    },
    {
        "name": "Andres Alberto Mendez Corchuelo (986117)",
        "url": "https://github.com/amcfire/cs572"
    },
    {
        "name": "Redae Mehari Mengsteab (109371)",
        "url": "https://github.com/RedaeMengsteab/CS572"
    },
    {
        "name": "Charles Karanja Muchene (986817)",
        "url": "https://github.com/charlesmuchene/cs572"
    },
    {
        "name": "Anh Nghia Nguyen (986919)",
        "url": "https://github.com/nghianghesi/cs572"
    },
    {
        "name": "Hong Hai Nguyen (986912)",
        "url": "https://github.com/HaiHNguyen/CS572"
    },
    {
        "name": "Swagat Man Rajbhandari (986917)",
        "url": "https://github.com/smrajbhandari/cs572"
    },
    {
        "name": "Mohammed Abdella Seud (109362)",
        "url": "https://github.com/MoSeud/CS572-MWA"
    },
    {
        "name": "Mohamed Hany Salem Hamdy Soliman (986610)",
        "url": "https://github.com/MsolimanHany/MWA"
    },
    {
        "name": "Enkhbaatar Tumenbayar (986708)",
        "url": "https://github.com/Enkhbaatar/CS572"
    },
    {
        "name": "Dong Wang (987005)",
        "url": "https://github.com/cytochromewangdong/cs572"
    },
    {
        "name": "Semhar Issac Weldegirgis (109346)",
        "url": "https://github.com/semharIssac/CS572"
    },
    {
        "name": "Duosi Zhang (987000)",
        "url": "https://github.com/zhangdshr/cs572"
    },
    {
        "name": "Daniel Zuemui (109376)",
        "url": "https://github.com/DaniAZ/MWA"
    }
].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

//Iterate over list of students
for (let i in students) {

    //Create new DOM elements for each student
    const student_li = document.createElement('li');
    const checkbox_li = document.createElement('li');
    const h3 = document.createElement('h3');
    const checkbox = document.createElement('input');

    //Set values
    h3.innerText = students[i].name;

    //Set attributes
    h3.setAttribute('data-student-url', students[i].url);
    h3.setAttribute('data-student-name', students[i].name);
    checkbox.setAttribute('data-student-url', students[i].url);
    checkbox.setAttribute('data-student-name', students[i].name);

    checkbox.type = 'checkbox';

    //Set function
    student_li.addEventListener('click', (e) => {
        // clear output
        students_history.innerText = '';
        access_student(e.target.getAttribute('data-student-url'), e.target.getAttribute('data-student-name'))
    });

    //Append elements to DOM
    student_li.appendChild(h3);
    checkbox_li.appendChild(checkbox);
    student_list.appendChild(student_li);
    checkbox_list.appendChild(checkbox_li)
}

//Uncheck all checked students
function uncheck(e) {
    // console.log(e);
    e.forEach((x) => x.checked = false)
}

//Logic for click events on students
function access_student(target, name) {

    //Retrieve student data from 'data' attributes
    const student_username = target.slice(19, target.lastIndexOf('/'));
    const course_name = target.slice(target.lastIndexOf('/') + 1, target.length);

    //Create new elements
    const li = document.createElement('li');
    const avatar_img = document.createElement('img');
    const bio_name = document.createElement('a');
    const history_list = document.createElement('ul');

    bio_name.setAttribute('href', target);
    bio_name.setAttribute('target', '_blank');

    li.appendChild(avatar_img);
    li.appendChild(bio_name);
    li.appendChild(history_list);

    students_history.appendChild(li);

    //Retrieve user information
    fetch(`https://api.github.com/users/${student_username}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(response => {
            avatar_img.setAttribute('src', response.avatar_url);
            bio_name.innerText = name;
        })
        .catch(error => {
            if (error) throw new Error(error);
        })

    //Retrieve commit history
    fetch(`https://api.github.com/repos/${student_username}/${course_name}/commits`, {
        // fetch(`https://api.github.com/repos/milesmf/milesmf/commits`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(response => {
            if (response.message === 'Not Found') {
                const li = document.createElement('li');
                // const h5 = document.createElement('h5');
                const h3 = document.createElement('h3');

                // h5.innerText = x.commit.committer.date;
                h3.innerText = 'This student has no commit history :/';

                // li.appendChild(h5);
                li.appendChild(h3);

                history_list.appendChild(li);
            } else {
                response.map((x) => {
                    const li = document.createElement('li');
                    const h5 = document.createElement('h5');
                    const h3 = document.createElement('h3');

                    h5.innerText = x.commit.committer.date;
                    h3.innerText = x.commit.message;

                    li.appendChild(h5);
                    li.appendChild(h3);

                    history_list.appendChild(li);
                });
            }
        })
        .catch(error => {
            if (error) throw new Error(error);
        })
}

//Perform mass search
search.addEventListener('click', () => {
    // clear output
    students_history.innerText = '';

    const selected_students = document.querySelectorAll(`input[type=checkbox]:checked`);
    if (selected_students.length) {
        //Search for selected students
        selected_students.forEach(x => {
            setTimeout(() => {
                access_student(x.getAttribute('data-student-url'), x.getAttribute('data-student-name'));
            }, 100);
        });

        uncheck(selected_students);
    } else {
        //Search for all students
        const all_students = students.map(x => setTimeout(() => { access_student(x.url, x.name) }), 100);
    }
});