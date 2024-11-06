<?php


function primo($numero)
{


    $primo = true;
    $i = 2;
    while ($i <= $numero / 2   &&  $primo) {
        if ($numero % $i == 0) $primo = false;
        else $i++;
    }

    return $primo;
}
if (isset($_REQUEST["submit"])) {
    if ( primo($_REQUEST['numero'] ))
        echo "el nuero es primo";
    else
        echo "el numero no es primo";

    echo "<a href=\"formulario.php\">Continuar</a>";
} else {
?>

    mete un numero para saber si es primo o no.......
    <form method="post">


        <label for="numero">numero:</label>
        <input name="numero" type="number">

        <button type="submit" name="submit">Submit</button>
    </form>
<?php
}
