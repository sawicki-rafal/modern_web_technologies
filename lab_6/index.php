<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Grid PHP</title>
    <style>
        html {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        *, *:before, *:after {
            box-sizing: inherit;
        }

        .row:after {
            content: "";
            clear: both;
            display: table;
        }

        .col {
            float: left;
            width: 50%;
        }
    </style>
</head>
<body>
<?php
function generateGrid($n, $k)
{
    $x = pow(2, ($k - 1));
    for ($i = 0; $i < $n; $i++) {
        echo "<div class=\"row\">";
        echo generateColumn($x);
        echo "</div>";
    }
}

function generateColumn($k)
{
    if ($k === 0) {
        $backgroundColor = getRandomColor();
        return getBaseColumn($backgroundColor);
    } else if ($k === 1) {
        $backgroundColor = getRandomColor();
        $backgroundColor2 = getRandomColor();
        return getBaseColumn($backgroundColor) . getBaseColumn($backgroundColor2);
    } else {
        $k = $k / 2;
        return "<div class=\"col\"><div class=\"row\">" . generateColumn($k) . "</div></div>" . "<div class=\"col\"><div class=\"row\">" . generateColumn($k) . "</div></div>";
    }
}

function getBaseColumn($backgroundColor)
{
    return "<div class=\"col\" style=\"background: " . $backgroundColor . "\">&nbsp</div>";
}

$rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function getRandomColor()
{
    global $rand;
    return '#' . $rand[rand(0, 15)] . $rand[rand(0, 15)] . $rand[rand(0, 15)] . $rand[rand(0, 15)] . $rand[rand(0, 15)] . $rand[rand(0, 15)];
}

generateGrid(1, 4);
?>
</body>
</html>