var student=[
{
	'Name': 'Adpele Akin',
	'Level': 100,
	'Course': 'Geography',
	'Grade': 10
},
{
	'Name': 'Chukwu Emeka',
	'Level': 200,
	'Course': 'Microbiolgy',
	'Grade': 50
},
{
	'Name': 'Doyin Ola',
	'Level': 300,
	'Course': 'Agric',
	'Grade': 30
}
]
student[3]={
	'Name':'Bimbo Sope',
	'Level':400,
	'Course':'Chemistry',
	'firstSemester':40,
	'secondSemester':50,
};
function average (firstSemester,secondSemester) {
	document.write((firstSemester + secondSemester)/2);
}

average(student[3].firstSemester,student[3].secondSemester);

// console.log(average);
// console.log(student);