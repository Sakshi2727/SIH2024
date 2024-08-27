                          
class Addbook
{
    constructor(recipe,yr,branch)
    {
        this.recipe=recipe;
        this.year=yr;
        this.branch=branch;
        if(this.branch==='IT')
        {
            if(this.year==='FY')
            {
                this.coll='itfy';

            }
            else if(this.year==='SY')
            {
                this.coll='itsy';

            }
            else if(this.year==='TY')
            {
                this.coll='itty';

            }
            else
            {
                this.coll='itly';
            }
        }
        else if(this.branch==='CS')
        {
            if(this.year==='FY')
            {
                this.coll='csfy';

            }
            else if(this.year==='SY')
            {
                this.coll='cssy';

            }
            else if(this.year==='TY')
            {
                this.coll='csty';

            }
            else
            {
                this.coll='csly';
            }
        }

        else if(this.branch==='EXTC')
        {
            if(this.year==='FY')
            {
                this.coll='exfy';

            }
            else if(this.year==='SY')
            {
                this.coll='exsy';

            }
            else if(this.year==='TY')
            {
                this.coll='exty';

            }
            else
            {
                this.coll='exly';
            }
        }

        else if(this.branch==='MECH')
        {
            if(this.year==='FY')
            {
                this.coll='mefy';

            }
            else if(this.year==='SY')
            {
                this.coll='mesy';

            }
            else if(this.year==='TY')
            {
                this.coll='mety';

            }
            else
            {
                this.coll='mely';
            }
        }

        else if(this.branch==='ETRX')
        {
            if(this.year==='FY')
            {
                this.coll='etfy';

            }
            else if(this.year==='SY')
            {
                this.coll='etsy';

            }
            else if(this.year==='TY')
            {
                this.coll='etty';

            }
            else
            {
                this.coll='etly';
            }
        }

    }
 
    
    addcoll()
    {
    
        db.collection(this.coll).add(this.recipe).then( () =>{
            const modal=document.querySelector('#modal-create');
            M.Modal.getInstance(modal).close();
            createForm.reset();

    
        }).catch(err =>{
            console.log(err);
        });
       
    }

}

const guideList=document.querySelector('.guides'); 
const list=document.querySelectorAll('.boo');
const list1=document.querySelectorAll('.boo1');
const list2=document.querySelectorAll('.boo2');
const list3=document.querySelectorAll('.boo3');
const list4=document.querySelectorAll('.boo4');
const heading=document.querySelector('.heading');

//auth status changes
auth.onAuthStateChanged(user=>{
    if(user){
        //get data
        setupUI(user);
        if(heading!=null)
            heading.innerHTML="";
     if(guideList!=null)
     {
        guideList.innerHTML+=`<h3 align="center" style="color:white;"><strong>My books  <i class="fas fa-book-open"></i></strong></h3>`;
     }
     
     const snap=(col,y)=>{
        db.collection(col).onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change =>{
                const doc=change.doc;
                
            
                if(change.type==='added')
                {
                   
                    if(guideList!=null)
                    {  

                    setupGuides(doc.data(),user,doc.id); 
                   
                    }
                    else
                    {
                    viewBook(doc.data(),doc.id,y,doc.data().branch);
                    }
            

                    
                }
                else if(change.type==='removed')
                {
                    
                    deleteBook(doc.id);

                  
                }
            })
        });
     }
     snap('itfy',1);
     snap('itsy',2);
     snap('itty',3);
     snap('itly',4);
    snap('csfy',1);
    snap('cssy',2);
    snap('csty',3);
    snap('csly',4);
    snap('exfy',1);
    snap('exsy',2);
    snap('exty',3);
    snap('exly',4);
    snap('mefy',1);
    snap('mesy',2);
    snap('mety',3);
    snap('mely',4);
    snap('etfy',1);
    snap('etsy',2);
    snap('etty',3);
    snap('etly',4);
     
}
    else{
        setupUI();
     
        heading.innerHTML=`<div style="color: white; font-size: 31px;     font-family: 'Quintessential'; >
        <p class="cen"><strong><bold>"If you love your books,&nbsp;let them go."<br>
            
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 
         -The New York Times.</p></bold></strong></p>
        </div>
        
    <div style="color: white; font-size: 31px;     font-family: 'Quintessential'; padding-left: 7px; left:2%; position:absolute;padding-top: 339px; "><strong>
      <bold> LD Books, your go-to website<br> for donating/borrowing University books.</bold> </strong>
      <div style="text-align: right; font-size: 25px; padding-left: 670px;"><strong>
        Login to check availability of a book...
        </strong>
      </div><br>
    </div>`;


        if(window.location.href==='index.html')
        {
        setupGuides();
        }
      
    }
});



//create new book
const createForm=document.querySelector('#create-form');
createForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const now=new Date();
        const recipe={
        title: createForm.recipe.value,
        author:createForm.auth.value,
        owner:createForm.owner.value,
        contact:createForm.contact.value,
        email:createForm.email.value,
        year:createForm.year.value,
        branch:createForm.branch.value,
        added_at: firebase.firestore.Timestamp.fromDate(now)
        };  
        addbook=new Addbook(recipe,recipe.year,recipe.branch);
        addbook.addcoll();

});


//signup
const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //get user info
    const email=signupForm['signup-email'].value;
    const password=signupForm['signup-password'].value;

    //signup user
    auth.createUserWithEmailAndPassword(email,password)
    .then((cred)=>{
        //creating user doc
        return db.collection('users').doc(cred.user.uid).set({
            name:signupForm.name.value,
            year:signupForm.year.value,
            branch:signupForm.branch.value,
            contact:signupForm.contact.value

        });

        
    }).then(()=>{
        const modal=document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML="";
    }).catch(err=>{
        signupForm.querySelector('.error').innerHTML=err.message;

    })

});

//logout
const logout=document.querySelector('#logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut();

});

//login
const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //get user info
    const email=loginForm['login-email'].value;
const password=loginForm['login-password'].value;
auth.signInWithEmailAndPassword(email,password).then((cred)=>{
 
    const modal=document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    loginForm.querySelector('.error').innerHTML="";
    
}).catch(err=>{
    loginForm.querySelector('.error').innerHTML=err.message;

})

});


//search
const searchForm = document.querySelector('#se');
const resultElement = document.querySelector('.result');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  flag = 0;
  resultElement.innerHTML = ""; // Clear previous results

  console.log("Hey!");

  const searchTerm = searchForm.search.value.toUpperCase(); // Get search term and convert to uppercase

  // Function to search a single collection
  const searchCollection = async (col) => {
    try {
      const snapshot = await db.collection(col).get(); // Get all documents at once
      snapshot.forEach((doc) => {
        const title = doc.data().title.toUpperCase(); // Get title and convert to uppercase
        const titleWords = title.split(' '); // Split title into words

        titleWords.forEach((word) => {
          if (searchTerm.indexOf(word) !== -1) {
            flag = 1;
            return; // Exit loop if a match is found
          }
        });
      });

      if (flag === 1) {
        console.log("Found in", col);
        resultElement.innerHTML = "Book is available!";
        searchForm.reset(); // Reset form after finding a match
      } else {
        console.log("No match found in", col);
      }
    } catch (error) {
      console.error("Error searching collection:", error);
    }
  };

  // Define your collection names here (replace with actual names)
  const collections = ['csty', 'cssy', 'csfy', 'csly', 'mety', 'mesy', 'mefy', 'mely', 'exty', 'exsy', 'exfy', 'exly', 'etty', 'etsy', 'etfy', 'etly', 'itsy', 'itty', 'itly', 'itfy'];

  // Search each collection sequentially
  collections.forEach(async (col) => {
    await searchCollection(col);
  });
});