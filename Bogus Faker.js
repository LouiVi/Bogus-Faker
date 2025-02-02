cfg.Portrait, cfg.Light, cfg.MUI;
let records = [];
//app.LoadPlugin( "Utils" );
RandomFloatRange = function(from /* Starting range */, to /* Ending Range*/) {
return from + (Math.random() * (to - from));
};

async function OnStart()
{

    db = app.OpenDatabase( app.GetDatabaseFolder()+ "/BogusFaker.sqlite" )  
      
sql = "CREATE TABLE People ( id INTEGER PRIMARY KEY AUTOINCREMENT, guid TEXT UNIQUE NOT NULL, ssn TEXT NOT NULL, firstName TEXT NOT NULL, lastName1 TEXT NOT NULL, lastName2 TEXT NOT NULL, gender TEXT, age NUMERIC, birthdate DATETIME, religion TEXT, salary TEXT, ocupation TEXT, maritalStatus TEXT, addressStreet TEXT, addressCity TEXT, , addressState TEXT, addressZipCode TEXT" );";

/*db.ExecuteSql( "INSERT INTO People(guid, email, ssn, firstName, lastName1, lastName2, gender, age, birthdate, addressStreet, addressCity, addressState, addressZipCode, religion, ocupation, salary, maritalStatus, genre)" +   
        " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [records[i].firstName + " " + records[i].lastName + " " + records[i].lastName2, records[i].gender, records[i].age], null,(error)=>{alert(error);})  */
db.ExecuteSql(sql);
//app.HttpRequest("GET", "https://this-person-does-not-exist.com/en","","", GetContents)
/*const { faker } = await import('https://esm.sh/@faker-js/faker');

const randomName = faker.person.fullName(); // Amber Keebler
const randomEmail = faker.internet.email(); */
//utils = app.CreateUtils();
const { faker } = await import('https://esm.sh/@faker-js/faker');
const occupations = ["Neourologist", "Urologist", "Beautitian", "Budtender", "Fireman", "Stripper", "Model", "Painter", "Teacher", "Carpenter", "Baker", "Manager", "Carrier", "Fast food worker", "Supervisor", "Data Entry", "Call Center worker", "Driver", "Waitress", "Director", "Astronaut", "Militar", "Bodybuilder", "Secretary", "Lawyer", "Judge", "Senior Care","Watcher","Veterinary", 
        "Doctor", "Police Officer", "Unemployed", "CEO", "Teacher", "Architect", "Mechanic", "Influencer", "Profesional Football Player","Profesional Basketball Player", "Student", "Chef", "Bartender", "Polititian", "News Anchor", 
        "Engineer", "Nurse", "Artist", "Software Developer", "Salesperson"
    ];
function createRandomUser(){
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const lastName2 = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName }).toLowerCase();
  const birthdate = faker.date.birthdate();//faker.date.past(50, new Date(1980, 0, 1)); // Birthdate within the last 30 years
const age = new Date().getFullYear() - birthdate.getFullYear();
        var address = faker.address.streetAddress();
        const address2 = faker.address.city();
        const address3 = faker.address.state();
        const address4 = faker.address.zipCode();
        address += "\r\n" + address2 + ", " + address3 + " " + " USA" + "\r\n" + address4;
        const salary = parseFloat(RandomFloatRange(25000.00, 150000.99)).toFixed(2);//faker.finance.amount(300000, 1200000, 2, '$'); // Random salary
        const jobDescription = occupations[Math.floor(Math.random() * occupations.length)]; // Random occupation
				const genre = faker.music.genre();
  return {
  		id: i+1,
    _guid: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: birthdate.toLocaleDateString('en-US'),
    age,
    email,
    firstName,
    lastName,
    lastName2,
    sex,
    address,
    salary,
    jobDescription,
    genre,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    religion: faker.helpers.arrayElement(['Christianism', 'Budism', 'Islam','Scientology','Ateism','Non Specified']),
    maritalStatus: faker.helpers.arrayElement(['Married', 'Single', 'Divorced','Widow','Engaged']),
    sons: getSonsInfo(age),
  };
}



	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "", 1, 0.5, "Left,AutoShrink,Multiline")
	txt.SetTextSize( 42 )
	lay.AddChild( txt )
	web = app.CreateWebView( 1, 0.5 )
	//web.LoadUrl( "https://this-person-does-not-exist.com/en" );
	
	lay.AddChild( web );
	/*txt = app.CreateText( randomName)
	txt.SetTextSize( 22 )
	lay.AddChild( txt )*/
	//app.GetObjects()
	//Add layout to app.	
	app.AddLayout( lay )
	//app.Wait(10, false);
	for(i=0;i<1000;i++){
	const userData = createRandomUser();
	records.push(userData);
	//app.Wait(1, false);
	//web.LoadUrl( records[i].avatar );
	
	txt.SetText( "ID: " + records[i].id + "\r\nGuid: " + records[i]._guid + "\r\nFull Name: " + records[i].firstName + " " + records[i].lastName + " " + records[i].lastName2 + "\r\nBirthday: " + records[i].birthday+ "\r\nAge: " +records[i].age + "\r\nSex: " +records[i].sex + "\r\nSalary: " +formatCurrency(records[i].salary)+ "\r\nEmail: " +records[i].email+ "\r\nJob Description: " +records[i].jobDescription+ "\r\nAddress:\r\n " +records[i].address + "\r\nFavorite Music/Genre: "  + records[i].genre+ "\r\nMarital Status: "  + records[i].maritalStatus + "\r\nReligion: " + records[i].religion + "\r\nSons: " + JSON.stringify(records[i].sons));
	web.LoadHtml( txt.GetText() );
	db.ExecuteSql( "INSERT INTO People(guid, email, ssn, firstName, lastName1, lastName2, gender, age, birthdate, addressStreet, addressCity, addressState, addressZipCode, religion, ocupation, salary, maritalStatus, genre)" +   
        " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [records[i].firstName + " " + records[i].lastName + " " + records[i].lastName2, records[i].gender, records[i].age], null,(error)=>{alert(error);})  

	app.ShowPopup(records[i].id + "\r\n" + records[i]._guid + "\r\n" + records[i].firstName + " " + records[i].lastName + "\r\n" + records[i].birthday + "\r\n" +records[i].age + "\r\n", "Long,Top");
//alert(JSON.stringify(user));

localStorage.setItem(`user_${i + 1}`, JSON.stringify(userData));
    app.Wait(3.45, false);
    }
alert(JSON.stringify(records))

    // Optionally, save all records in a single entry
    localStorage.setItem('allUsers', JSON.stringify(records));
    
}

function GetContents(error, reply, status)
{
if(error) alert(error)
alert(status);
	app.WriteFile( "contents.html", reply )
}

function formatCurrency(amount, currencyCode = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
    }).format(amount);
}


/*function getSonsInfo(age) {
    // Check if the person has children (50% chance)
    const hasChildren = Math.random() > 0.5;

    if (!hasChildren) {
        return "This person has no children.";
    }

    // Generate a random number of children (1 to 5)
    const numberOfChildren = Math.floor(Math.random() * 5) + 1;

    // Generate random ages for the children
    const childrenAges = [];
    for (let i = 0; i < numberOfChildren; i++) {
        // Ensure children's ages are reasonable (e.g., less than parent's age)
        const childAge = Math.floor(Math.random() * Math.min(age - 18, 30)) + 1; // Assuming parent is at least 18
        childrenAges.push(childAge);
    }

    return {
        numberOfChildren: numberOfChildren,
        childrenAges: childrenAges
    };
}
*/

function getSonsInfo(age) {
    // Check if the person has children (50% chance)
    const hasChildren = Math.random() > 0.5;

    if (!hasChildren) {
        return "This person has no children.";
    }

    // Generate a random number of children (1 to 5)
    const numberOfChildren = Math.floor(Math.random() * 5) + 1;

    // Get the current year
    const currentYear = new Date().getUTCFullYear();
    
    // Generate random ages and birthdates for the children
    const childrenInfo = [];
    for (let i = 0; i < numberOfChildren; i++) {
        // Ensure children's ages are reasonable (e.g., less than parent's age)
        const childAge = Math.floor(Math.random() * Math.min(age - 18, 30)) + 1; // Assuming parent is at least 18
        const birthYear = currentYear - childAge;
        const birthDate = new Date(birthYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1); // Random day in the month

        childrenInfo.push({
            age: childAge,
            birthDate: birthDate.toISOString().split('T')[0] // Format as YYYY-MM-DD
        });
    }

    return {
        numberOfChildren: numberOfChildren,
        childrenInfo: childrenInfo
    };
}

// Example usage:
//console.log(getSonsInfo(40));

// Example usage:
//console.log(getSonsInfo(40));