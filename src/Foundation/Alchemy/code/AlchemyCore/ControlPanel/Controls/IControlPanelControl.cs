﻿using System.Web.UI;

namespace Sitecore.Foundation.Alchemy.ControlPanel.Controls
{
	/// <summary>
	/// A control that can be placed on the Unicorn control panel page
	/// </summary>
	public interface IControlPanelControl
	{
		void Render(HtmlTextWriter writer);
	}
}
