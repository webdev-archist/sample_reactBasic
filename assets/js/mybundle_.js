const mybundle = () => {
    function functiontest(){
        console.log("functiontest")
    }
    class ClassTest{
        constructor(){
            this.testvar = "testvar"
        }

        anymethod(){
            console.log(this.testvar)
            return true
        }
    }
}
export default mybundle