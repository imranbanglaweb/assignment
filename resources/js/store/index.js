export default {

	state: {

       category: []

	},

	getters: {

       getPublicationFormGetters(state){ //take parameter state

          return state.category
       }
	},

	actions: {
       allpublicationFromDatabase(context){

          axios.get("/")

               .then((response)=>{
                  console.log(response.data.save_publication)
                  context.commit("categories",response.data.save_publication) //save_publication will be run from mutation

               })

               .catch(()=>{
                  
                  console.log("Error........")
                  
               })
       }
	},

	mutations: {
       categories(state,data) {
          return state.category = data
       }
	}
}