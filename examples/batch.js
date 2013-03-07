/**
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class StringDemo 
{
  public static void main(String arg[])
	{
		String str="jay dhameliy";
		String tmp="";
		int flag=0;
		System.out.println("indexof="+str.indexOf("a"));
		for(int i=0;i<str.length();i++)
		{
			if(String.valueOf(str.charAt(i)).equals("a") && flag==0)
			{
				tmp+="A";
				flag=1;
			}
			else
				tmp+=str.charAt(i);
		}
		str=tmp;
		System.out.println(str);
	}
}
