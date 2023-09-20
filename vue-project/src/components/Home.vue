<script>
export default { name:"Home" }
</script>


<template>
    <div class="Inputs">
            <h1 class="h1_home">Cadastro de Móveis</h1>

            <input class="input_movel" type="text" placeholder="Móvel">
            
            <input type="text" placeholder="Quantidade">

            <input type="text" placeholder="Material">
            
            <input type="text" placeholder="Tamanho">
            
            <input type="text" placeholder="Código do Produto">

            <button class="Cadastrar">Cadastrar</button>
    </div>    
</template>

<style scoped>

.Inputs {
    margin-left: -70px;
    margin-top: 150px;
}

input {
    height: 5vh;
    margin-bottom: 35px;
    margin-left: 290px;
    margin-top: 2px;
    border-radius: 30px;
    padding: 5px;
    display: flex;
    flex-direction: column;
   
}

.Cadastrar {
    margin-top: 35px;
    margin-left: 300px;
    border-radius: 30px;
    height: 50px;
    width: 150px;
    display: inline-block;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    box-shadow: 6px 6px 12px #c5c5c5,
                -6px -6px 12px #ffffff;
    }

    .Cadastrar:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5,
                inset -4px -4px 12px #ffffff;
    }

    .Cadastrar:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
    }

    .Cadastrar:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #009087;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
    }

    .Cadastrar:hover {
    color: #ffffff;
    border: 1px solid #009087;
    }

    .Cadastrar:hover:before {
    top: -35%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    .Cadastrar:hover:after {
    top: -45%;
    background-color: #df7d0c;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}



.h1_home {
    margin-left: 255px;
    margin-bottom: 40px;
}
</style>