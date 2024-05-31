<?php

/* Conectar a una base de datos de MySQL de forma procedimental */

$usuario = 'root';
$contraseña = '';

try {
    $conexion = new PDO('mysql:host=localhost:3306;dbname=dbProductosPHP', $usuario, $contraseña);
    $stmt = $conexion->query('SELECT * from productos');
    $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode($resultado));
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>
