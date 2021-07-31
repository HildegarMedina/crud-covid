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
                            <tr v-for="(item, index) in [0,1,2,3,5,6,7,8]" :key="index">
                                <td>Nome Completo</td>
                                <td>22</td>
                                <td>Positivo</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" v-on:click="changeType('Modificar')">Modificar</button>
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
                    <form>

                        <h2 v-if="type=='Adicionar'">Adicionar paciente</h2>
                        <h2 v-if="type=='Modificar'">Modificar paciente</h2>

                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome completo</label>
                            <input type="text" class="form-control" id="nome" placeholder="">
                        </div>

                        <div class="mb-3">
                            <label for="idade" class="form-label">Idade</label>
                            <input type="number" class="form-control" id="idade" min="1" max="120" placeholder="">
                        </div>

                        <div class="mb-3">
                            <label for="teste" class="form-label">Teste</label>
                            <select name="teste" id="teste" class="form-control">
                                <option value="0">Negativo</option>
                                <option value="1">Positivo</option>
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
            form: {
                nome: "",
                idade: "",
                teste: ""
            }
        }
    },
    methods: {
        resetForm() {
            this.form = {
                nome: "",
                idade: "",
                teste: ""
            }
        },
        changeType(newType) {
            this.type = newType;
            resetForm();
        },
    }
}
</script>
<style scoped>
    h2 {
        color: #606060;
    }
</style>