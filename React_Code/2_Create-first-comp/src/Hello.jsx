function Hello(){
    let myName = 'Raushan';
    let number = 456;
    let fullName = () =>{
        return 'Raushan Singh';
    }

    return<h3>
       MessageNo: {number} I am Your Student {fullName()}.
    </h3>
}

export default Hello;