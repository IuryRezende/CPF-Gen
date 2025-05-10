
class CpfGenerator{
    constructor()
    {
        this.newCPF = [];
    }

    random(){
        return Math.trunc(Math.random() * 9);
    }

    addDots(cpf){
        cpf.splice(3, 0, ".");
        cpf.splice(7, 0, ".");
        cpf.splice(11, 0, "-");
        return cpf;
    }

    verifyNum(verifier, cpf){
        for (let i = 0; i < cpf.length; i++)
        {
            verifier += (cpf[i] * (cpf.length + 1 - i));
        //console.log(`${cpf[i]} * ${cpf.length + 1 - i}: ${cpf[i] * (cpf.length + 1 - i)}`);
        }
        //console.log("Total value: " + verifier);
        console.log("Rest: "+ verifier % 11);
    
        verifier = verifier%11;
        //console.log("Verifier value: " + verifier);
        verifier < 2 ? cpf.push(0) : cpf.push(11 - verifier);
        return cpf; 
    }

    generator()
    {
        let verifyCode = [0, 0];
        this.newCPF.length = 0;

        for (let i = 0; i < 9; i++)
        {
            this.newCPF.push(this.random());
        }
        this.newCPF = this.verifyNum(verifyCode[0], this.newCPF);
        this.newCPF = this.verifyNum(verifyCode[1], this.newCPF);

        this.addDots(this.newCPF);
        return this.newCPF.join("");
    }
}

const btnRefresh = document.getElementById("btn-refresh");
const cpfDisplay = document.getElementById("cpf-display");
const cpf = new CpfGenerator();

btnRefresh.addEventListener("click", () => {
    cpfDisplay.textContent = cpf.generator();
})