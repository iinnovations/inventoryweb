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

<link rel="stylesheet" href="../jqm/jquery.mobile-1.4.4.css" />
<link rel="stylesheet" href="../css/vms.css" />
<link rel="stylesheet" href="/css/themes/base.css" />

<script src="/js/jquery-1.11.1.min.js"></script>
<script src="/js/jquery-migrate-1.2.1.min.js"></script>


<script src="../jqm/jquery.mobile-1.4.4.min.js"></script>

<script src="/js/iijslib.js" type="text/javascript"></script>

</head>

<body>
    <div data-role="page" class="type-home">
        <div data-role="content" style="max-width:800px"  data-theme="d">
            <div class="content-secondary">
                <?php $user->logoutmobile_form(); ?>
            </div>
        </div>
    </div>
</body>

</html>
