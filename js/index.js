 fetch("https://api.github.com/users/Sushmi-pal")
    .then(response => response.json())
    .then(function(data){
    console.log(data)
    document.getElementById('loading').hidden=true

    document.getElementById('ProfileImage').src=data['avatar_url']
    document.getElementById('Name').textContent=data['name']
    document.getElementById('bio').textContent=data['bio']
    document.getElementById('Gitlink').href=data['html_url']

    // document.getElementById('mainContainer').hidden=false



    })
    var Repos=document.getElementById('Repos')
    const divResult=document.getElementById('divResult')
    Repos.addEventListener('click',getRepos)

    function getRepos(){
      let op=``;
      let atry=document.getElementById('ttry')
      fetch("https://api.github.com/users/Sushmi-pal/repos").then(res=>res.json()).then(data=>

      data.forEach(i =>
           {
                var h = document.createElement("a");
                h.setAttribute('href',i.html_url)
                console.log(data)
                var divResult = document.createTextNode(i.name)
                h.appendChild(divResult)
                document.getElementById('ttry').appendChild(h)
                h.appendChild(document.createElement("br"))


            }))
      document.getElementById('Repos').hidden=true




      }



