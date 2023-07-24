console.log('comment section');
showComments();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function () {
    // console.log('button clicked')

    let addTxt = document.getElementById('addTxt');
    let addName = document.getElementById("addName");
    let comment = localStorage.getItem('comment');
    if (comment == null) {
        commentObj = [];
    } else {
        commentObj = JSON.parse(comment);
    }

    let myObj = {
        name :addName.value,
        text : addTxt.value
    }

    commentObj.push(myObj);
    // commentObj.push(addTxt.value);
    localStorage.setItem("comment", JSON.stringify(commentObj));
    addTxt.value = "";
    addName.value = "";

    console.log(commentObj);
    showComments();
})

function showComments() {
    let comment = localStorage.getItem('comment');
    if (comment == null) {
        commentObj = [];
    } else {
        commentObj = JSON.parse(comment);
    }

    let html = "";
    for (let index = 0; index < commentObj.length; index++) {
        html += `
        <div class="commentCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${commentObj[index].name}</h5>
                        <p class="card-text"> ${commentObj[index].text}</p>
                        <button id="${index}" onclick="deleteComment(this.id)" class="btn btn-primary">Delete Comment</button>
                    </div>
                </div>`;
        
    }

    let commentsElem = document.getElementById('comments')
    if(commentObj.length != 0) {
        commentsElem.innerHTML = html;
    } else{
        commentsElem.innerHTML = "Sorry, you haven't add any comments till now. You can click on add comment button to create a comment";
    }
}


function deleteComment (index){
    let comment = localStorage.getItem('comment');
    if (comment == null) {
        commentObj = [];
    } else {
        commentObj = JSON.parse(comment);
    }   

    commentObj.splice(index, 1);
    localStorage.setItem('comment' , JSON.stringify(commentObj));
    showComments();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input" , function(){
     
    let inputVal = search.value.toLowerCase();
    let commentCard = document.getElementsByClassName('commentCard');
    console.log(commentCard);

    for(let index=0; index<commentCard.length;index++){
        let cardTxt = commentCard[index].getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            commentCard[index].style.display = "block";
        }
        else {
            commentCard[index].style.display = "none";
        }
    }
})