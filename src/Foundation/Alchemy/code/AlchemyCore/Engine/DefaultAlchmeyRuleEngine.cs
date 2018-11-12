﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Sitecore.Diagnostics;
using Sitecore.Foundation.Alchemy.Configuration;
using Sitecore.Foundation.AlchemyBase;
using Sitecore.Foundation.AlchemyBase.ResponseWrapper;

namespace Sitecore.Foundation.Alchemy.Engine
{
	public class DefaultAlchmeyRuleEngine : IDefaultAlchmeyRuleEngine
	{
		//protected readonly List<IAlchemyRule> AlchemyRules = new List<IAlchemyRule>();

		public DefaultAlchmeyRuleEngine(XmlNode configNode)
		{
			Assert.ArgumentNotNull(configNode, "configNode");

			//var rules = configNode.ChildNodes;

			//foreach (XmlNode rule in rules)
			//{
			//	if (rule.NodeType == XmlNodeType.Element && rule.Name.Equals("alchemyRule"))
			//	{
			//		AlchemyRules.Add(XmlActivator.CreateObject<IAlchemyRule>(rule));
			//	}
			//}
		}

		public void Begin()
		{
		    
		}

	    public IWebApiResponse<List<IAlchemyRule>> GetRulesList()
	    {
	        return new WebApiResponse<List<IAlchemyRule>>();
        }
    }
}
