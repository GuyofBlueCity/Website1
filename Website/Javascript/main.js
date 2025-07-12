const form= document.getElementById('login')
const rollno_input= document.getElementById('rollno-input')
const email_input= document.getElementById('email-input')
const password_input= document.getElementById('password-input')
const error_message= document.getElementById('error-message')
form.addEventListener('submit', (e)=>{
	//prevent submit
	let errors=[]

	errors=getLoginFormErrors(rollno_input.value, email_input.value, password_input.value)

	if (errors.length>0){
		e.preventDefault()
		error_message.innerText = errors.join(". ")
	}
})
function getLoginFormErrors(rollno, email, password){
	let errors=[]

	if(rollno===''||rollno==null){
		errors.push('Roll No is required')
		rollno_input.parentElement.classList.add('incorrect')
	}
	if(email===''||email==null){
		errors.push('Email is required')
		email_input.parentElement.classList.add('incorrect')
	}
	if(password===''||password==null){
		errors.push('Password is required')
		password_input.parentElement.classList.add('incorrect')
	}

	return errors;
}


const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);

function addEntryToDom(event) {
        event.preventDefault();
        const d = new Date();
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = d.getDay();
        const year = d.getFullYear();


        const heading = document.createElement(`h2`);
        heading.className = `heading-results`;
        heading.textContent = `Journal Entries`;
        entryResultRow.insertAdjacentElement(`beforebegin`, heading)

        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
                entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
                entryDiv.appendChild(entryDate);
        }


        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = ``;
}

entryForm.addEventListener(`submit`, addEntryToDom);
