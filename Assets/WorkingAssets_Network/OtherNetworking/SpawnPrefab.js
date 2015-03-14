var playerPrefab : Transform;
var sphere : Transform;
var isFirst = true;

function OnNetworkLoadedLevel ()
{
	if(isFirst){
		Network.Instantiate(playerPrefab, transform.position, transform.rotation, 0);
		isFirst = false;
	}else{
		Network.Instantiate(playerPrefab, sphere.transform.position, sphere.transform.rotation, 0);
	}
	
}

function OnPlayerDisconnected (player : NetworkPlayer)
{
	Debug.Log("Server destroying player");
	Network.RemoveRPCs(player, 0);
	Network.DestroyPlayerObjects(player);
}
