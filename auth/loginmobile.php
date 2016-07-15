<?php require_once('../auth/user.php'); ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" >

<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
<meta http-equiv="pragma" content="no-cache" />

<title>Login</title>

<link rel="stylesheet" href="/jqm/themes/jqmbasetheme.css" />

<link rel="stylesheet" href="/jqm/themes/jquery.mobile.icons.min.css" />
<link rel="stylesheet" href="/jqm/jquery.mobile.custom.structure.min.css" />
<link rel="stylesheet" href="/css/inventory.css" />

<script src="/js/jquery-1.11.0.js"></script>

<script src="/js/jquery-ui-1.11.4.custom/jquery-ui.js"></script>
<script src="/js/jquery.ui.touch-punch.min.js"></script>

<!--jQuery Mobile is 1.4.5-->
<script src="/jqm/jquery.mobile.custom.js"></script>

<script src="/js/iijslib.js"></script>

</head>

<body>
    <div data-role="content" class="ui-content-main" style="min-height:600px">
            <div role="main" class="ui-content content-one" id="content-one">
                <?php $user->loginmobile_form(); ?>
            </div>
    </div>
</body>

</html>
