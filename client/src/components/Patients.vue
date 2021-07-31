<template lang="">
    <main class="container">
        <div class="row my-4">

            <!-- VER PECIENTES -->
            <div class="col-md-7">
                <div class="card p-4 shadow">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-center mb-3">Pacientes</h2>
                        <button class="btn btn-success" v-on:click="changeType('Adicionar')">Adicionar</button>
                    </div>
                    <table class="table table-bordered border-primary-custom table-striped mb-0">
                        <thead class="bg-primary-custom text-white">
                            <tr>
                                <td>Nome</td>
                                <td>Idade</td>
                                <td>Teste</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in patients" :key="index">
                                <td>{{item.nome}}</td>
                                <td>{{item.idade}}</td>
                                <td>{{item.teste ? 'Positivo': "Negativo"}}</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" v-on:click="modificar(item._id, item.nome, item.idade, item.teste)">Modificar</button>
                                    <button class="btn btn-sm btn-danger">Excluir</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- ADICIONAR OU MODIFICAR -->
            <div class="col-md-5">
                <div class="card p-4 shadow">
                    <form @submit.prevent="sendForm">
                        <div class="alert alert-danger" v-if="error">
                            {{error}}
                        </div>

                        <div class="alert alert-success" v-if="success">
                            {{success}}
                        </div>
                        
                        <h2 v-if="type=='Adicionar'">Adicionar paciente</h2>
                        <h2 v-if="type=='Modificar'">Modificar paciente</h2>

                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome completo</label>
                            <input type="text" class="form-control" id="nome" v-model="form.nome" required>
                        </div>

                        <div class="mb-3">
                            <label for="idade" class="form-label">Idade</label>
                            <input type="number" class="form-control" id="idade" min="1" max="120" v-model="form.idade" required>
                        </div>

                        <div class="mb-3">
                            <label for="teste" class="form-label">Teste</label>
                            <select name="teste" id="teste" class="form-control" v-model="form.teste" required>
                                <option value="false">Negativo</option>
                                <option value="true">Positivo</option>
                            </select>
                        </div>

                        <button class="btn btn-success btn-block text-center w-100" v-if="type=='Adicionar'">Adicionar</button>
                        <button class="btn btn-primary btn-block text-center w-100" v-if="type=='Modificar'">Modificar</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return {
            type: "Adicionar",
            error: false,
            success: false,
            patients: [],
            form: {
                id: null,
                nome: "",
                idade: 0,
                teste: false
            }
        }
    },
    methods: {
        resetForm() {
            this.form = {
                id: null,
                nome: "",
                idade: 0,
                teste: 0
            }
        },
        changeType(newType) {
            this.type = newType;
            this.resetForm();
        },
        modificar(id, nome, idade, teste) {
            this.changeType('Modificar');
            this.form = {
                id: id,
                nome: nome,
                idade, idade,
                teste: teste
            }
        },
        async sendForm() {

            //Adicionar
            if (this.type == "Adicionar") {
                const response = await fetch('http://localhost:8000/api/pacientes/novo', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });
                const content = await response.json();
                if (!content._id) {
                    this.error = content.result;
                    setTimeout(()=> {
                        this.error = false
                    }, 4000);
                }else {
                    this.success = "Paciente adicionado com éxito"
                    this.resetForm();
                    setTimeout(()=> {
                        this.success = false
                    }, 4000);
                }
            }

            //Editar
        },
        async updatePatients() {
            this.patients = await fetch(
                'http://localhost:8000/api/pacientes'
                ).then(res => res.json());
        }
    },
    async mounted() {

        //Get data
        this.updatePatients();
 
    }
}
</script>
<style scoped>
    h2 {
        color: #606060;
    }
</style>