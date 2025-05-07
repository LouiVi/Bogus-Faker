cfg.Portrait, cfg.Light, cfg.MUI;
app.LoadPlugin('ChartJS');
let records = [];
app.LoadPlugin( "Utils" );
var moneyMale=0;
var moneyFemale=0;
RandomFloatRange = function(from /* Starting range */, to /* Ending Range*/) {
return from + (Math.random() * (to - from));
};

async function OnStart()
{
utils=app.CreateUtils()
chart = app.LoadChartJS()
    db = app.OpenDatabase(/* app.GetDatabaseFolder()+*/ "/storage/emulated/0/Download/sqlite/BogusFaker.sqlite" );
//sql = "DROP TABLE People;"
//db.ExecuteSql(sql);

sql = app.ReadFile( "sql.txt" );//"CREATE TABLE People ( id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, guid TEXT UNIQUE NOT NULL, ssn TEXT NULL, firstName TEXT NULL, lastName1 TEXT NULL, lastName2 TEXT NULL, sex TEXT NULL, age TEXT null, birthdate DATETIME null, religion TEXT null, salary TEXT null, ocupation TEXT null, maritalStatus TEXT null, addressStreet TEXT null, addressCity TEXT null, addressState TEXT null, addressZipCode TEXT null, genre TEXT null, mobile TEXT null, email TEXT null);";
//t  = prompt("",sql);
//app.Exit();
db.ExecuteSql(sql);
const { faker } = await import('https://esm.sh/@faker-js/faker');
const occupations = ["Comedian", "Neourologist", "Urologist", "Beautitian", "Budtender", "Fireman", "Stripper", "Model", "Painter", "Teacher", "Carpenter", "Baker", "Manager", "Carrier", "Fast food worker", "Supervisor", "Data Entry", "Call Center worker", "Driver", "Waitress", "Director", "Astronaut", "Militar", "Bodybuilder", "Secretary", "Lawyer", "Judge", "Senior Care","Watcher","Veterinary", 
        "Doctor", "Police Officer", "Unemployed", "CEO", "Teacher", "Architect", "Mechanic", "Influencer", "Profesional Football Player","Profesional Basketball Player", "Student", "Chef", "Bartender", "Polititian", "News Anchor", 
        "Engineer", "Nurse", "Artist", "Software Developer", "Salesperson"
    ];
function createRandomUser(){
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName1 = faker.person.lastName();
  const lastName2 = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName1 }).toLowerCase();
  const birthdate = faker.date.birthdate();//faker.date.past(50, new Date(1980, 0, 1)); // Birthdate within the last 30 years
  const age = new Date().getFullYear() - birthdate.getFullYear();
  const addressStreet = faker.address.streetAddress();
  const addressCity = faker.address.city();
  const addressState = faker.address.state();
  const addressZipCode = faker.address.zipCode();
  var address = addressStreet + ", " + addressCity + "\r\n " + addressState + " " + " USA" + "\r\n" + addressZipCode;
  const salary = parseFloat(RandomFloatRange(25000.00, 275000.99)).toFixed(2);//faker.finance.amount(300000, 1200000, 2, '$'); // Random salary
  const jobDescription = occupations[Math.floor(Math.random() * occupations.length)]; // Random occupation
  const genre = faker.music.genre();
  const mobile = generateRandomPhoneNumber(addressState);
  const ssn = generateRandomSSN();
  return {
  	id: i+1,
    _guid: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: birthdate.toLocaleDateString('en-US'),
    age,
    addressStreet,
    addressCity,
    addressState,
    addressZipCode,
    email,
    firstName,
    lastName1,
    lastName2,
    sex,
    address,
    salary,
    jobDescription,
    genre,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    religion: faker.helpers.arrayElement(['Christianism', 'Budism', 'Islam','Scientology','Ateism','Non Specified']),
    maritalStatus: faker.helpers.arrayElement(['Married', 'Single', 'Divorced','Widow','Engaged']),
    studies: faker.helpers.arrayElement(['High School', 'College Degree', 'Some College','Technical Degree','Doctorate', 'Master']),
    hobbies: faker.helpers.arrayElement(['Read', 'Movies', 'Bowling','Tennis','Basketball', 'Dance', 'Gym','Fishing','Shopping', 'Cycling','Mechanic', 'Judo', 'Tae-Kwan-Do', 'Racing', 'Paint','Sing','Photography','Rappeling', 'Hiking','Theater', 'Museums','Cruise', 'Navigate','Design','No Specified']),
    sons: getSonsInfo(age),
    mobile,
    ssn
  };
}



	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "Top,HCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "", 1, 0.5, "Left,AutoShrink,Multiline")
	txt.SetTextSize( 42 )
	lay.AddChild( txt )
	tabs = app.CreateTabs( "Salary by Sex,Age,Ocupation", 1, 0.5, "VCenter" );
    lay.AddChild( tabs );

    tab1 = tabs.GetLayout( "Salary by Sex" );
	
//	web = app.CreateWebView( 1, 0.35 )
	//web.LoadUrl( "https://this-person-does-not-exist.com/en" );
	
//	//lay.AddChild( web );
	/*txt = app.CreateText( randomName)
	txt.SetTextSize( 22 )
	lay.AddChild( txt )*/
	//app.GetObjects()
	//Add layout to app.	
	app.AddLayout( lay )
	//app.Wait(10, false);
	for(i=0;i<15000;i++){
	const userData = createRandomUser();
	//app.WriteFile( "/storage/emulated/0/JSON/user_"+(i+1)+".json", JSON.stringify(userData) )
	records.push(userData);
	if(userData.sex ==='male'){
		moneyMale += 1;//parseFloat(userData.salary.split(",").join("").split('$').join("").split(" ").join(""));
		/*if(i==199)*/ 
	//	updateChart();
	}else{
	moneyFemale += 1;//parseFloat(userData.salary.split(",").join("").split('$').join("").split(" ").join(""));
	/*if(i==199)*/
	//updateChart();
	}
	//alert(moneyFemale);
	//await updateChart();
	//app.Wait(2, true);
	//app.Wait(1, true);
	//web.LoadUrl( records[i].avatar );
	
	txt.SetText( "ID: " + records[i].id + "\r\nGuid: " + records[i]._guid + "\r\nSocial Security Number: " + records[i].ssn + "\r\nMobile: " + records[i].mobile + "\r\nFull Name: " + records[i].firstName + " " + records[i].lastName1 + " " + records[i].lastName2 + "\r\nBirthday: " + records[i].birthday+ "\r\nAge: " +records[i].age + "\r\nSex: " +records[i].sex + "\r\nSalary: " +formatCurrency(records[i].salary)+ "\r\nEmail: " +records[i].email+ "\r\nJob Description: " +records[i].jobDescription+ "\r\nAddress:\r\n " +records[i].address + "\r\nFavorite Music/Genre: "  + records[i].genre+ "\r\nMarital Status: "  + records[i].maritalStatus + "\r\nReligion: " + records[i].religion + "\r\nStudies: " + records[i].studies + "\r\nHobbies: " + records[i].hobbies+ "\r\nSons: " + JSON.stringify(records[i].sons) + "\r\nMales Total Salary:" + moneyMale.toFixed(2)+ "\r\nFemales Total Salary:" + moneyFemale.toFixed(2));
//	web.LoadHtml( txt.GetText() );
//if(utils.LocalStorageLeftSize()>1000){
//app.ShowPopup(utils.LocalStorageLeftSize());
	db.ExecuteSql( "INSERT INTO Sims(guid, email, ssn, firstName, lastName1, lastName2, sex, age, birthdate, addressStreet, addressCity, addressState, addressZipCode, religion, ocupation, salary, maritalStatus, genre,mobile)" +   
        " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [records[i]._guid, records[i].email, records[i].ssn,records[i].firstName, records[i].lastName1, records[i].lastName2, records[i].sex, records[i].age, records[i].birthday, records[i].addressStreet, records[i].addressCity, records[i].addressState, records[i].addressZipCode, records[i].religion, records[i].jobDescription, records[i].salary, records[i].maritalStatus, records[i].genre,records[i].mobile], ()=>{app.ShowPopup( "Success" )},(error)=>{alert(error);})  

	//app.ShowPopup(records[i].id + "\r\n" + records[i]._guid + "\r\n" + records[i].firstName + " " + records[i].lastName1 + "\r\n" + records[i].birthday + "\r\n" +records[i].age + "\r\n", "Long,Top");
//alert(JSON.stringify(user));
//currentRecord = JSON.stringify(userData);
//localStorage.setItem(`user_${i + 1}`, currentRecord);
//app.WriteFile( "/storage/emulated/0/JSON/user_"+(i+1)+".json", currentRecord)
  //  app.Wait(3.45, false);
    }
//alert(JSON.stringify(records))
//alert("Space Left: " +utils.LocalStorageLeftSize());
//alert("Space Max: " +utils.LocalStorageMaxSize());
    // Optionally, save all records in a single entry
    //sessionStorage.setItem('allUsers', JSON.stringify(records));
    data = {
            labels: ['male','female'],
        	datasets: [
        	    {
            		label: 'Salary by Sex',
            		backgroundColor: ["#9C27B0", "#039BE5", "#5E35B1", "#FF9800", "#26A69A"],
            		borderColor: "#7B1FA2",
            		borderWidth: 1,
            		data: [moneyMale.toFixed(2), moneyFemale.toFixed(2)]
            	}
        	]
        }

        
        barChart = chart.CreateChart(data, 'pie', 0.828, 0.375)
        tab1.AddChild(barChart)
        db.ExecuteSql("create view myPeople as SELECT distinct lastName1, count(lastName1) AS lastNames FROM People GROUP BY lastName1 UNION SELECT distinct lastName2, count(lastName2) AS lastNames FROM People GROUP BY lastName2;",[], ()=>{});
  db.ExecuteSql("SELECT distinct lastName1, count(lastName1) AS lastNames FROM myPeople GROUP BY lastName1",[], OnAges);

}

function OnAges( results )   
{  
//alert("her")

    var s = "";  
    var w = new Array();
    alert(results.rows.length)
    var len = results.rows.length;  
    for(var i = 0; i < len; i++ )   
    {  
        var item = results.rows.item(i)  
        if(s!=="") s+= ""
        s += item.lastName1+ ": " + item.lastNames+ "\r\n";
        w.push(item.lastName1);
        //+ ", " + item.data_num + "\n";   
    }  
    //app.WriteFile( "lastNames.json", JSON.stringify(w) );
    //alert(s);
    //txt.SetText( s )  
}  

//Callback to show errors.  
function OnErrorx( msg )   
{  
    app.Alert( "Error: " + msg )  
    console.log( "Error: " + msg )  
}

        async function updateChart()
{
//alert(moneyMale);
if(typeof barChart === "undefined"){
    var data = [ 
    [moneyMale,moneyFemale]
  //      [utils.RandomIntegerRange(0, 5000), utils.RandomIntegerRange(0, 5000)]
    ]
    }else{
    data = {
            labels: ['male','female'],
        	datasets: [
        	    {
            		label: 'Salary',
            		backgroundColor:utils.RandomHexColor(),// "#9C27B0",
            		borderColor: "#7B1FA2",
            		borderWidth: 1,
            		data: [moneyMale, moneyFemale]
            	}
        	]
        }
        }
        //barChart = chart.CreateChart(data, 'pie', 1, 0.5)
        //lay.AddChild(barChart)
        if(typeof barChart =="undefined"){
    barChart = chart.CreateChart(data, 'horizontalBar', 1, 0.5)
        lay.AddChild(barChart)
        }else{
    //alert("here");

    barChart.updateData(data)
    }
}

function generateRandomSSN() {
    // Generate the area number (first three digits)
    const areaNumber = Math.floor(Math.random() * 900) + 100; // Range: 100-999

    // Generate the group number (next two digits)
    const groupNumber = Math.floor(Math.random() * 100); // Range: 00-99

    // Generate the serial number (last four digits)
    const serialNumber = Math.floor(Math.random() * 10000); // Range: 0000-9999

    // Format the SSN as "AAA-GG-SSSS"
    return `${String(areaNumber).padStart(3, '0')}-${String(groupNumber).padStart(2, '0')}-${String(serialNumber).padStart(4, '0')}`;
}

function generateRandomPhoneNumber(state) {
    // Mapping of states to area codes (example, not exhaustive)
    const stateAreaCodes = {
        "California": [213, 310, 415, 619,209,279,323,341,350,369,408,424,442,510,530],
        "New York": [212, 315, 516, 718],
        "Texas": [214, 512, 713, 817],
        "Florida": [305, 407, 813, 904],
        "Alabama":[205,251, 256, 334, 659, 938],
        "Alaska":[907],
        "Arizona":[480,520,602,624,928],
        "Arkansas":[327,479,501,870],
        "Colorado":[303,719,720,970,983],
        "Connecticut":[203,475,860,959 ],
        "Delaware":[302],
        "Hawaii":[808],
        "Idaho":[208,986],
        "Maine":[207],
        "Georgia":[229,404,470,478,678,706,762,770,912,943], 
    };

    // Check if the state exists in the mapping
    if (!stateAreaCodes[state]) {
        return '(000) 000-0000';
        //return `State "${state}" not found in the area code mapping.`;
    }

    // Get a random area code for the given state
    const areaCodes = stateAreaCodes[state];
    const randomAreaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];

    // Generate a random 7-digit phone number
    const randomPhoneNumber = Math.floor(1000000 + Math.random() * 9000000);

    // Format and return the phone number
    return `(${randomAreaCode}) ${Math.floor(randomPhoneNumber / 10000)}-${randomPhoneNumber % 10000}`;
}

// Example usage:
//console.log(generateRandomPhoneNumber("California")); // e.g., (213) 123-4567
//console.log(generateRandomPhoneNumber("Texas"));      // e.g., (512) 987-6543
//console.log(generateRandomPhoneNumber("Unknown"));    // State "Unknown" not found in the area code mapping.

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