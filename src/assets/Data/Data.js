class Data {

    empresas(){

        let empresas = [
            {'id':1,'image':'eject.png','modalImage':'trabalhoModal1.jpg','title':'EJECT','time':'1 ano e 8 meses','role':'Assessor de projetos ➔ Gerente de projetos','text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ]

        const formatText=(text="")=>{
            text = text.split("\n")
            let fText = ""
            text.map((i)=>{
                return fText+="<p className=\"p\">"+i+"</p>"
            })
            console.log(fText)
            return fText
        }

        empresas.map((i)=>{
            return i.text = formatText(i.text)
        })

        return empresas
    }

    formacao(){

        let formacao = [
            {'id':1,'percent':'100','title':'Curso Técnico em Informática','text':'CE EDUC PROFIS SEN JESSE PINTO FREIRE CENEP'},
            {'id':2,'percent':'24','title':'Bacharelado em Tecnologia da Informação','text':'UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE'},
        ]
        
        return formacao
    }

    tecnologias(){

        let tecnologias = [
            {'id':1,'image':'django.png','title':'Django & Rest','experience':3},
            {'id':2,'image':'react.png','title':'React','experience':3},
            {'id':3,'image':'git.png','title':'Git & GitHub','experience':3},
            {'id':4,'image':'html.png','title':'HTML','experience':3},
            {'id':5,'image':'css.png','title':'CSS','experience':3},
            {'id':6,'image':'javascript.png','title':'JavaScript','experience':3},
            {'id':7,'image':'python.png','title':'Python','experience':3},
            {'id':8,'image':'c.png','title':'C#','experience':3},
            {'id':9,'image':'figma.png','title':'Figma','experience':3},
        ]
        
        return tecnologias
    }

}

module.exports = new Data
