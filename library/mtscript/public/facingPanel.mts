[h: selectedTokens = 0]
[frame5("Set Token Facing", "width=50; height=50"): {
  <link rel='stylesheet' type='text/css' href='facingCSS@[r:getMacroLocation()]'></link>
	<table style="font-size: x-large" align="center">
		<tr>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", 135, selectedTokens)]' title='Make token(s) face NorthWest'>&#x2b01</a></button>
			</td>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", 90, selectedTokens)]' title='Make token(s) face North'>&#x21e7</a></button>
			</td>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", 45, selectedTokens)]' title='Make token(s) face NorthEast'>&#x2b00</a></button>
			</td>
		</tr>
		<tr>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", 180, selectedTokens)]' title='Make token(s) face West'>&#x21e6</a></button>
			</td>
			<td align="center">
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", "", selectedTokens)]' title='Set or clear facing for token(s)'>&nbsp;&nbsp;</a></button>
			</td>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", 0, selectedTokens)]' title='Make token(s) face East'>&#x21e8</a></button>
			</td>
		</tr>
		<tr>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", 225, selectedTokens)]' title='Make token(s) face SouthWest'>&#x2b03</a></button>
			</td>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", 270, selectedTokens)]' title='Make token(s) face South'>&#x21e9</a></button>
			</td>
			<td>
				<button style="font-size: x-large"><a href='[r: macroLinkText("setFacing@Lib:Facing", "none", -45, selectedTokens)]' title='Make token(s) face SouthEast'>&#x2b02</a></button>
			</td>
		</tr>
	</table>
}
]
